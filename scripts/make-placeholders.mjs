// Generates labelled placeholder JPGs in /public/images. Real photos can
// simply overwrite these files (keep the same names). Run: npm run placeholders
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const images = [
  ["hero-fleet.jpg", 2400, 1400], ["og-image.jpg", 1200, 630], ["why-satluj.jpg", 1200, 1500],
  ["about-hero.jpg", 2400, 1200], ["about-story.jpg", 1200, 1600], ["services-hero.jpg", 2400, 1200],
  ["fleet-hero.jpg", 2400, 1200], ["contact-hero.jpg", 2400, 1200],
  ["team-01.jpg", 1600, 1200], ["team-02.jpg", 1600, 900], ["team-03.jpg", 1600, 900],
  ["service-container.jpg", 1600, 1000], ["service-loose-cargo.jpg", 1600, 1000], ["service-flatbed-lowbed.jpg", 1600, 1000],
  ["service-tipper.jpg", 1600, 1000], ["service-gcc.jpg", 1600, 1000], ["service-fleet-hire.jpg", 1600, 1000],
  ["truck-flatbed-01.jpg", 1200, 900], ["truck-flatbed-02.jpg", 1200, 900], ["truck-container-01.jpg", 1200, 900],
  ["truck-container-02.jpg", 1200, 900], ["truck-tipper-01.jpg", 1200, 900], ["truck-tipper-02.jpg", 1200, 900],
  ["truck-lowbed-01.jpg", 1200, 900], ["truck-lowbed-02.jpg", 1200, 900],
];

mkdirSync("public/images", { recursive: true });
for (const [name, w, h] of images) {
  const fs = Math.round(Math.min(w, h) / 14);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a2f35"/><stop offset="1" stop-color="#4A5158"/></linearGradient>
  <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="2" height="40" fill="#ffffff" opacity=".05"/></pattern></defs>
  <rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#p)"/>
  <text x="50%" y="50%" fill="#ffffff" opacity=".7" font-family="Arial, sans-serif" font-size="${fs}" font-weight="700" text-anchor="middle">PLACEHOLDER</text>
  <text x="50%" y="50%" dy="${fs * 1.3}" fill="#E8A33D" font-family="Arial, sans-serif" font-size="${Math.round(fs * 0.6)}" text-anchor="middle">${name} (${w}x${h})</text></svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 70 }).toFile(`public/images/${name}`);
}
console.log(`Created ${images.length} placeholders`);
