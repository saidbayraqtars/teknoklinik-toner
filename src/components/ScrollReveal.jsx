import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    // Reset all reveals on route change
    const allReveals = document.querySelectorAll('.reveal')
    allReveals.forEach(el => el.classList.remove('visible'))

    // Small delay to allow DOM to render new page
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )
      const elements = document.querySelectorAll('.reveal')
      elements.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return null
}
