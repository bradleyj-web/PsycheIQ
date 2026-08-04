const sharp = require("sharp");
const fs = require("fs");
const SRC = "C:/Users/plzdo/Downloads/psycheiq-repo/assets/icon.svg";
const OUT = "C:/Users/plzdo/Downloads/psycheiq-repo/assets/";
const svg = fs.readFileSync(SRC);
(async () => {
  for (const size of [192, 512]) {
    await sharp(svg, { density: 400 }).resize(size, size).png({ compressionLevel: 9 })
      .toFile(OUT + "icon-" + size + ".png");
    const s = fs.statSync(OUT + "icon-" + size + ".png").size;
    console.log("  wrote assets/icon-" + size + ".png  " + (s / 1024).toFixed(0) + " KB");
  }
  await sharp(svg, { density: 400 }).resize(256, 256).png().toFile("C:/Users/plzdo/Downloads/_icons/preview-256.png");
  console.log("  wrote preview");
})();
