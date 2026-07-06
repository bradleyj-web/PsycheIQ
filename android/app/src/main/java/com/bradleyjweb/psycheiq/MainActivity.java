package com.bradleyjweb.psycheiq;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.graphics.Color;
import android.net.ConnectivityManager;
import android.net.NetworkCapabilities;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.ConsumeParams;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryPurchasesParams;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MainActivity extends Activity implements PurchasesUpdatedListener {
    private static final String WEB_APP_URL = "https://bradleyj-web.github.io/PsycheIQ/";
    private static final String HOSTED_APP_HOST = "bradleyj-web.github.io";
    private static final String PRODUCT_CORE_REPORT = "psycheiq_core_report";
    private static final String PRODUCT_MONTHLY_ACCESS = "psycheiq_monthly_access";

    private WebView webView;
    private BillingClient billingClient;
    private boolean webAppReady = false;
    private String pendingLaunchMode = "";
    private final List<String> pendingScripts = new ArrayList<>();
    private final Set<String> processingTokens = new HashSet<>();

    @Override
    @SuppressLint("SetJavaScriptEnabled")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        webView.setLayoutParams(new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        ));

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setMediaPlaybackRequiresUserGesture(false);

        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new PsycheWebViewClient());
        webView.addJavascriptInterface(new BillingBridge(), "PsycheIQBilling");

        createBillingClient();

        if (isOnline()) {
            setContentView(webView);
            webView.loadUrl(WEB_APP_URL);
            startBillingConnection();
        } else {
            showOfflineMessage();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (billingClient != null && billingClient.isReady()) {
            restorePurchases();
        }
    }

    @Override
    protected void onDestroy() {
        if (billingClient != null) {
            billingClient.endConnection();
        }
        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
            return;
        }

        super.onBackPressed();
    }

    private void createBillingClient() {
        PendingPurchasesParams pendingPurchasesParams = PendingPurchasesParams
            .newBuilder()
            .enableOneTimeProducts()
            .build();

        billingClient = BillingClient
            .newBuilder(this)
            .setListener(this)
            .enablePendingPurchases(pendingPurchasesParams)
            .enableAutoServiceReconnection()
            .build();
    }

    private void startBillingConnection() {
        if (billingClient == null) {
            createBillingClient();
        }

        if (billingClient.isReady()) {
            restorePurchases();
            if (!pendingLaunchMode.isEmpty()) {
                String mode = pendingLaunchMode;
                pendingLaunchMode = "";
                launchPurchase(mode);
            }
            return;
        }

        billingClient.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(BillingResult billingResult) {
                if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                    emitBillingError("Google Play checkout is not available yet. Try again in a minute.");
                    return;
                }

                restorePurchases();
                if (!pendingLaunchMode.isEmpty()) {
                    String mode = pendingLaunchMode;
                    pendingLaunchMode = "";
                    launchPurchase(mode);
                }
            }

            @Override
            public void onBillingServiceDisconnected() {
                emitBillingError("Google Play checkout disconnected. Try the unlock button again.");
            }
        });
    }

    private void launchPurchase(String requestedMode) {
        String mode = normalizeMode(requestedMode);

        if (billingClient == null || !billingClient.isReady()) {
            pendingLaunchMode = mode;
            startBillingConnection();
            emitBillingStatus("Connecting to Google Play checkout...");
            return;
        }

        String productId = productIdForMode(mode);
        String productType = productTypeForMode(mode);
        QueryProductDetailsParams.Product product = QueryProductDetailsParams.Product
            .newBuilder()
            .setProductId(productId)
            .setProductType(productType)
            .build();
        QueryProductDetailsParams params = QueryProductDetailsParams
            .newBuilder()
            .setProductList(Collections.singletonList(product))
            .build();

        billingClient.queryProductDetailsAsync(params, (billingResult, productDetailsResult) -> {
            if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                emitBillingError("Google Play could not load this product. Check the Play Console product setup.");
                return;
            }

            List<ProductDetails> detailsList = productDetailsResult.getProductDetailsList();
            if (detailsList == null || detailsList.isEmpty()) {
                emitBillingError("This product is not active in Google Play yet. Add " + productId + " in Play Console.");
                return;
            }

            runOnUiThread(() -> launchBillingFlow(mode, productType, detailsList.get(0)));
        });
    }

    private void launchBillingFlow(String mode, String productType, ProductDetails productDetails) {
        BillingFlowParams.ProductDetailsParams.Builder detailsBuilder = BillingFlowParams
            .ProductDetailsParams
            .newBuilder()
            .setProductDetails(productDetails);
        String offerToken = offerTokenFor(productType, productDetails);
        if (!offerToken.isEmpty()) {
            detailsBuilder.setOfferToken(offerToken);
        }

        BillingFlowParams flowParams = BillingFlowParams
            .newBuilder()
            .setProductDetailsParamsList(Collections.singletonList(detailsBuilder.build()))
            .build();

        BillingResult launchResult = billingClient.launchBillingFlow(this, flowParams);
        if (launchResult.getResponseCode() != BillingClient.BillingResponseCode.OK) {
            emitBillingError("Google Play checkout could not open. " + launchResult.getDebugMessage());
        } else {
            emitBillingStatus(mode.equals("member") ? "Google Play membership checkout opened." : "Google Play report checkout opened.");
        }
    }

    private String offerTokenFor(String productType, ProductDetails productDetails) {
        if (BillingClient.ProductType.SUBS.equals(productType)) {
            List<ProductDetails.SubscriptionOfferDetails> offers = productDetails.getSubscriptionOfferDetails();
            if (offers != null && !offers.isEmpty()) {
                return safeString(offers.get(0).getOfferToken());
            }
            return "";
        }

        List<ProductDetails.OneTimePurchaseOfferDetails> offers = productDetails.getOneTimePurchaseOfferDetailsList();
        if (offers != null && !offers.isEmpty()) {
            return safeString(offers.get(0).getOfferToken());
        }

        ProductDetails.OneTimePurchaseOfferDetails singleOffer = productDetails.getOneTimePurchaseOfferDetails();
        return singleOffer == null ? "" : safeString(singleOffer.getOfferToken());
    }

    @Override
    public void onPurchasesUpdated(BillingResult billingResult, List<Purchase> purchases) {
        int responseCode = billingResult.getResponseCode();

        if (responseCode == BillingClient.BillingResponseCode.USER_CANCELED) {
            emitBillingError("Checkout was canceled. Your result is still waiting here.");
            return;
        }

        if (responseCode != BillingClient.BillingResponseCode.OK || purchases == null) {
            emitBillingError("Google Play checkout could not finish. " + billingResult.getDebugMessage());
            return;
        }

        for (Purchase purchase : purchases) {
            handlePurchase(purchase);
        }
    }

    private void handlePurchase(Purchase purchase) {
        String mode = modeForPurchase(purchase);

        if (purchase.getPurchaseState() == Purchase.PurchaseState.PENDING) {
            emitBillingPending(mode);
            return;
        }

        if (purchase.getPurchaseState() != Purchase.PurchaseState.PURCHASED) {
            return;
        }

        emitPurchaseSuccess(mode);

        if (mode.equals("core")) {
            consumeCorePurchase(purchase);
            return;
        }

        acknowledgeMemberPurchase(purchase);
    }

    private void acknowledgeMemberPurchase(Purchase purchase) {
        if (purchase.isAcknowledged()) return;

        AcknowledgePurchaseParams params = AcknowledgePurchaseParams
            .newBuilder()
            .setPurchaseToken(purchase.getPurchaseToken())
            .build();

        billingClient.acknowledgePurchase(params, (billingResult) -> {
            if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                emitBillingStatus("Membership is unlocked, but Google Play will retry final confirmation.");
            }
        });
    }

    private void consumeCorePurchase(Purchase purchase) {
        String token = purchase.getPurchaseToken();
        if (token == null || token.isEmpty() || processingTokens.contains(token)) return;

        processingTokens.add(token);
        ConsumeParams params = ConsumeParams
            .newBuilder()
            .setPurchaseToken(token)
            .build();

        billingClient.consumeAsync(params, (billingResult, purchaseToken) -> {
            processingTokens.remove(purchaseToken);
            if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                emitBillingStatus("Report is unlocked, but Google Play will retry purchase cleanup later.");
            }
        });
    }

    private void restorePurchases() {
        if (billingClient == null || !billingClient.isReady()) return;

        queryPurchases(BillingClient.ProductType.INAPP);
        queryPurchases(BillingClient.ProductType.SUBS);
    }

    private void queryPurchases(String productType) {
        QueryPurchasesParams params = QueryPurchasesParams
            .newBuilder()
            .setProductType(productType)
            .build();

        billingClient.queryPurchasesAsync(params, (billingResult, purchases) -> {
            if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.OK || purchases == null) return;
            for (Purchase purchase : purchases) {
                handlePurchase(purchase);
            }
        });
    }

    private String modeForPurchase(Purchase purchase) {
        List<String> products = purchase.getProducts();
        if (products != null && products.contains(PRODUCT_MONTHLY_ACCESS)) return "member";
        return "core";
    }

    private String normalizeMode(String mode) {
        return "member".equals(mode) ? "member" : "core";
    }

    private String productIdForMode(String mode) {
        return "member".equals(mode) ? PRODUCT_MONTHLY_ACCESS : PRODUCT_CORE_REPORT;
    }

    private String productTypeForMode(String mode) {
        return "member".equals(mode) ? BillingClient.ProductType.SUBS : BillingClient.ProductType.INAPP;
    }

    private String safeString(String value) {
        return value == null ? "" : value;
    }

    private void emitPurchaseSuccess(String mode) {
        evaluateAppJavascript("window.applyPlayBillingPurchase && window.applyPlayBillingPurchase(" + JSONObject.quote(mode) + ");");
    }

    private void emitBillingPending(String mode) {
        evaluateAppJavascript("window.handlePlayBillingPending && window.handlePlayBillingPending(" + JSONObject.quote(mode) + ");");
    }

    private void emitBillingError(String message) {
        evaluateAppJavascript("window.handlePlayBillingError && window.handlePlayBillingError(" + JSONObject.quote(message) + ");");
    }

    private void emitBillingStatus(String message) {
        evaluateAppJavascript("window.handlePlayBillingStatus && window.handlePlayBillingStatus(" + JSONObject.quote(message) + ");");
    }

    private void evaluateAppJavascript(String script) {
        runOnUiThread(() -> {
            if (webView == null) return;
            if (!webAppReady) {
                pendingScripts.add(script);
                return;
            }
            webView.evaluateJavascript(script, null);
        });
    }

    private void flushPendingScripts() {
        if (webView == null || !webAppReady) return;
        List<String> scripts = new ArrayList<>(pendingScripts);
        pendingScripts.clear();
        for (String script : scripts) {
            webView.evaluateJavascript(script, null);
        }
    }

    private boolean isOnline() {
        ConnectivityManager manager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        if (manager == null || manager.getActiveNetwork() == null) return false;
        NetworkCapabilities capabilities = manager.getNetworkCapabilities(manager.getActiveNetwork());
        return capabilities != null && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);
    }

    private void showOfflineMessage() {
        TextView message = new TextView(this);
        message.setText("PsycheIQ needs an internet connection the first time it opens.");
        message.setTextColor(Color.rgb(233, 242, 245));
        message.setTextSize(18);
        message.setGravity(Gravity.CENTER);
        message.setPadding(40, 40, 40, 40);

        FrameLayout layout = new FrameLayout(this);
        layout.setBackgroundColor(Color.rgb(32, 44, 56));
        layout.addView(message, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        ));

        setContentView(layout);
    }

    public class BillingBridge {
        @JavascriptInterface
        public void purchase(String mode) {
            launchPurchase("member");
        }

        @JavascriptInterface
        public void restorePurchases() {
            startBillingConnection();
        }
    }

    private class PsycheWebViewClient extends WebViewClient {
        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            Uri uri = Uri.parse(url);
            if (HOSTED_APP_HOST.equals(uri.getHost())) {
                webAppReady = true;
                flushPendingScripts();
            }
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            String host = uri.getHost();
            if (host != null && host.equals(HOSTED_APP_HOST)) {
                return false;
            }

            try {
                view.getContext().startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, uri));
            } catch (ActivityNotFoundException error) {
                return true;
            }
            return true;
        }
    }
}
