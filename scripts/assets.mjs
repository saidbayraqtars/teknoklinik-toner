// One-off asset optimizer: PNG -> WebP, og-image.svg -> og-image.jpg (1200x630)
import sharp from 'sharp'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const imgDir = join(root, 'src', 'assets', 'images')
const pubDir = join(root, 'public')

const pngs = ['hero', 'toner', 'kurye']
for (const name of pngs) {
  const src = join(imgDir, `${name}.png`)
  const out = join(imgDir, `${name}.webp`)
  if (!existsSync(src)) { console.warn('skip, missing', src); continue }
  const info = await sharp(src).webp({ quality: 78 }).toFile(out)
  console.log(`webp  ${name}.webp  ${(info.size / 1024).toFixed(0)} KB`)
}

// OG image: rasterize SVG to 1200x630 JPG
const svgPath = join(pubDir, 'og-image.svg')
if (existsSync(svgPath)) {
  const svg = readFileSync(svgPath)
  const out = join(pubDir, 'og-image.jpg')
  const info = await sharp(svg, { density: 144 })
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 88 })
    .toFile(out)
  console.log(`og    og-image.jpg  ${(info.size / 1024).toFixed(0)} KB  ${info.width}x${info.height}`)
}
