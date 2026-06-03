import { useEffect } from 'react'

export const SITE_URL = 'https://tecnokliniktoner.com.tr'
const SITE_NAME = 'Teknoklinik'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route SEO head manager for the SPA.
 * Updates title, description, keywords, canonical, Open Graph, Twitter cards
 * and injects optional JSON-LD structured data scoped to the page.
 */
export default function Seo({ title, description, keywords, path = '/', image, jsonLd }) {
  const url = `${SITE_URL}${path}`
  const img = image || DEFAULT_IMAGE

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    if (keywords) setMeta('name', 'keywords', keywords)
    setLink('canonical', url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'tr_TR')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)

    // Page-scoped JSON-LD: remove previous, then inject current
    document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove())
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      blocks.forEach(block => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', '')
        script.textContent = JSON.stringify(block)
        document.head.appendChild(script)
      })
    }
  }, [title, description, keywords, url, img, jsonLd])

  return null
}
