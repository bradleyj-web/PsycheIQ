const CACHE_NAME = "psycheiq-v26";

/* Only files that definitely exist. cache.addAll() is atomic — one 404
   rejects the whole install and the worker never activates, which is what
   would have happened here once app.js was removed. Artwork is deliberately
   not precached: it is ~9 MB and the fetch handler caches each image the
   first time it is actually requested. */
const APP_SHELL = [
  "./",
  "./index.html",
  "./privacy.html",
  "./styles.css",
  "./supabase-config.js",
  "./manifest.json",
  "./assets/psyche-hero.svg",
  "./assets/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // tolerate an individual miss rather than bricking the install
      Promise.all(APP_SHELL.map((url) =>
        cache.add(url).catch((err) => console.warn("[sw] skipped " + url, err))
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch((error) => {
      return caches.match(event.request).then((cached) => {
        if (cached) return cached;
        if (event.request.mode === "navigate") return caches.match("./index.html");
        throw error;
      });
    })
  );
});
