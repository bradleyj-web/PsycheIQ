const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = "C:/Users/plzdo/Downloads/psycheiq-repo";
const TYPES = {".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",
  ".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"};
http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/write") {
    let body = "";
    req.on("data", c => body += c);
    req.on("end", () => {
      try {
        const { name, b64 } = JSON.parse(body);
        if (!/^[a-z0-9._-]+$/i.test(name)) throw new Error("bad name");
        const out = path.join(ROOT, "assets", name);
        fs.writeFileSync(out, Buffer.from(b64, "base64"));
        console.log("wrote " + out + " " + fs.statSync(out).size + " bytes");
        res.writeHead(200, {"Access-Control-Allow-Origin":"*"}); res.end("ok");
      } catch (e) {
        res.writeHead(400, {"Access-Control-Allow-Origin":"*"}); res.end(String(e));
      }
    });
    return;
  }
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (u === "/") u = "/index.html";
  fs.readFile(path.join(ROOT, u), (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, {"Content-Type": TYPES[path.extname(u).toLowerCase()] || "application/octet-stream"});
    res.end(data);
  });
}).listen(8789, () => console.log("up on 8789"));
