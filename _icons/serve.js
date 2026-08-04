const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = "C:/Users/plzdo/Downloads/psycheiq-repo";
const TYPES = {".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",
  ".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"};
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (u === "/") u = "/index.html";
  const fp = path.join(ROOT, u);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, {"Content-Type": TYPES[path.extname(fp).toLowerCase()] || "application/octet-stream"});
    res.end(data);
  });
}).listen(8788, () => console.log("up on 8788"));
