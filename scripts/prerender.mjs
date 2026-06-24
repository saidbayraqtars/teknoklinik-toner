// Static prerender: serves dist, drives installed Chrome via puppeteer-core,
// writes full per-route HTML so bots/AI crawlers get content without running JS.
// Resilient: if no Chrome is found (e.g. cloud build), it warns and exits 0
// instead of breaking the build — the SPA still works, just unprerendered.
import http from 'node:http'
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const PORT = 4180

const ROUTES = [
  '/',
  '/toner-dolumu',
  '/yazici-tamiri',
  '/kurye-hizmeti',
  '/blog',
  '/iletisim',
  '/blog/yazici-neden-cizgili-cikiyor',
  '/blog/orijinal-toner-vs-profesyonel-dolum',
  '/blog/kagit-sikismasi-cozumu',
]

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
}

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  return candidates.find(p => existsSync(p)) || null
}

if (!existsSync(dist)) {
  console.warn('[prerender] dist/ yok — önce `vite build`. Atlanıyor.')
  process.exit(0)
}

const chrome = findChrome()
if (!chrome) {
  console.warn('[prerender] Chrome/Edge bulunamadı — prerender atlandı (SPA olarak yayınlanır). PUPPETEER_EXECUTABLE_PATH ile yol verebilirsin.')
  process.exit(0)
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    let filePath = urlPath === '/' ? join(dist, 'index.html') : join(dist, urlPath)
    if (existsSync(filePath) && (await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html')
    if (!extname(filePath) || !existsSync(filePath)) filePath = join(dist, 'index.html') // SPA fallback
    const data = await readFile(filePath)
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
    res.end(data)
  } catch (e) {
    res.writeHead(500)
    res.end(String(e))
  }
})

await new Promise(r => server.listen(PORT, r))

let browser
try {
  browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] })
  let ok = 0
  for (const route of ROUTES) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 })
    await page.waitForSelector('#root > *', { timeout: 15000 })
    await new Promise(r => setTimeout(r, 350)) // let Seo head + router effects settle
    // Normalize scroll-reveal state so static markup matches React's first client render (clean hydration)
    await page.evaluate(() => document.querySelectorAll('.reveal.visible').forEach(e => e.classList.remove('visible')))
    const html = await page.content()
    const outDir = route === '/' ? dist : join(dist, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')
    console.log(`[prerender] ${route}  ${(html.length / 1024).toFixed(0)}kb`)
    await page.close()
    ok++
  }
  console.log(`[prerender] tamam: ${ok}/${ROUTES.length} sayfa`)
} catch (e) {
  console.warn('[prerender] hata, atlandı:', e.message)
} finally {
  if (browser) await browser.close()
  server.close()
}
