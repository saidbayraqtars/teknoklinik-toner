import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/toner-dolumu', label: 'Toner Dolumu' },
  { to: '/yazici-tamiri', label: 'Yazıcı Tamiri' },
  { to: '/kurye-hizmeti', label: 'Kurye Hizmeti' },
  { to: '/blog', label: 'Blog' },
  { to: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(v => {
      document.body.style.overflow = v ? '' : 'hidden'
      return !v
    })
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="var(--accent)" />
              <path d="M8 13h20M8 18h14M8 23h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="27" cy="22" r="5" fill="#003366" stroke="#fff" strokeWidth="1.5"/>
              <path d="M25 22l1.5 1.5L29 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-brand">Tecnoklinik</span>
            <span className="logo-sub">Toner & Yazıcı Merkezi</span>
          </div>
        </Link>

        {/* Live Status Badge */}
        <div className="live-status">
          <span className="pulse-dot" />
          <span className="live-text">Kuryelerimiz Aktif · 7/24</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="header-actions">
          <a href="tel:+905453422944" className="header-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.63 19.79 19.79 0 0110 2.18 2 2 0 0112 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L16.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0124 14h-2z"/>
            </svg>
            <span>0545 342 29 44</span>
          </a>
          <a href="tel:+905070055877" className="header-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.63 19.79 19.79 0 0110 2.18 2 2 0 0112 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L16.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0124 14h-2z"/>
            </svg>
            <span>0507 005 58 77</span>
          </a>
          <Link to="/iletisim" className="btn btn-primary btn-sm header-cta">
            Kurye Çağır
          </Link>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menü"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-live">
          <span className="pulse-dot" />
          <span>Kuryelerimiz Aktif · 7/24 Hizmete Hazır</span>
        </div>
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-cta">
          <a href="tel:+905453422944" className="btn btn-outline" style={{width:'100%',justifyContent:'center'}}>
            📞 0545 342 29 44
          </a>
          <a href="tel:+905070055877" className="btn btn-outline" style={{width:'100%',justifyContent:'center'}}>
            📞 0507 005 58 77
          </a>
          <Link to="/iletisim" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
            🛵 Kurye Çağır
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={toggleMenu} />
      )}
    </header>
  )
}
