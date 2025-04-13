import sharp from "sharp";
import fs from "fs";
import path from "path";

const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
  "og.png": [1200, 630], // Special case for OG image
};

async function generateIcons() {
  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Generate square icons from favicon.svg
  const faviconSvg = fs.readFileSync(path.join(publicDir, "favicon.svg"));
  for (const [filename, size] of Object.entries(sizes)) {
    if (Array.isArray(size)) continue; // Skip OG image

    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, filename));

    console.log(`Generated ${filename}`);
  }

  // Generate OG image from og.svg
  const ogSvg = fs.readFileSync(path.join(publicDir, "og.svg"));
  await sharp(ogSvg)
    .resize(sizes["og.png"][0], sizes["og.png"][1])
    .png()
    .toFile(path.join(publicDir, "og.png"));

  console.log("Generated og.png");
}

generateIcons().catch(console.error);
