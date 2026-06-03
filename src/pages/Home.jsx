import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import heroImg from '../assets/images/hero.png'
import tonerImg from '../assets/images/toner.png'
import kuryeImg from '../assets/images/kurye.png'
import './Home.css'

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Teknoklinik | Samsun Toner Dolumu ve Yazıcı Tamiri',
    url: SITE_URL,
    inLanguage: 'tr-TR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Samsun Motorlu Toner Dolumu Servisi',
    name: 'Samsun Toner Dolumu ve Motorlu Kurye Hizmeti',
    provider: { '@type': 'LocalBusiness', name: 'Teknoklinik', url: SITE_URL, telephone: '+90-545-342-2944' },
    areaServed: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba', 'Samsun'].map(n => ({ '@type': 'City', name: `${n}, Samsun` })),
    description: 'Samsun toner dolumu, motorlu toner dolumu servisi, kartuş yenileme ve yazıcı tamiri. 7/24 motorlu kurye ile 30 dakikada kapınızda.',
  },
]

const trustItems = [
  { icon: '🛵', title: '30 Dk. Kapınızda', desc: 'Samsun içi garantili teslimat' },
  { icon: '🔒', title: 'Garantili Dolum', desc: '3 ay yazılı garanti' },
  { icon: '🖨️', title: 'İkame Yazıcı', desc: 'Tamir süresince ücretsiz' },
  { icon: '⏰', title: '7/24 Hizmet', desc: 'Tatil ve gece dahil' },
]

const services = [
  {
    icon: '🖨️',
    title: 'Toner Dolumu',
    desc: 'HP, Canon, Brother, Epson tüm marka yazıcılarınız için profesyonel toner dolumu. 3 ay garanti ile.',
    link: '/toner-dolumu',
    color: 'primary',
    features: ['HP LaserJet serisi', 'Canon imageCLASS', 'Brother HL/MFC', 'Epson AL serisi'],
  },
  {
    icon: '🔧',
    title: 'Yazıcı Tamiri',
    desc: 'Kağıt sıkışması, kafa temizliği, anakart onarımı — tüm arızalar için profesyonel teknik servis.',
    link: '/yazici-tamiri',
    color: 'accent',
    features: ['Kağıt sıkışması', 'Kafa temizliği', 'Anakart onarımı', 'Silindir değişimi'],
  },
  {
    icon: '🛵',
    title: '7/24 Kurye',
    desc: 'Motorlu kurye hizmetimiz ile yazıcınızı kapınızdan teslim alıyoruz. Atakum, İlkadım, Canik, Tekkeköy.',
    link: '/kurye-hizmeti',
    color: 'success',
    features: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy'],
  },
]

const steps = [
  {
    num: '1',
    icon: '📱',
    title: 'Bizi Arayın veya Yazın',
    desc: 'WhatsApp veya telefon ile iletişime geçin. Arızanızı ve adresinizi bildirin.',
  },
  {
    num: '2',
    icon: '🛵',
    title: 'Kurye Kapınızda',
    desc: 'Motorlu kuryemiz 30 dakika içinde yazıcınızı teslim almak için adresinizde.',
  },
  {
    num: '3',
    icon: '✅',
    title: 'Teslim ve Garanti',
    desc: 'İşlem tamamlanınca kurye aynı gün iade eder. Faturalı garanti belgesi verilir.',
  },
]

const brands = [
  { name: 'HP', color: '#0096D6' },
  { name: 'Canon', color: '#CC0000' },
  { name: 'Brother', color: '#003087' },
  { name: 'Epson', color: '#003399' },
  { name: 'Samsung', color: '#1428A0' },
  { name: 'Lexmark', color: '#006B54' },
]

const testimonials = [
  {
    text: 'Atakum\'da ofisimizin yazıcısı arıza yaptı. 25 dakikada kurye geldi, aynı gün teslim ettiler. Olağanüstü hizmet!',
    name: 'Murat Yılmaz',
    role: 'İşletme Sahibi, Atakum',
    init: 'MY',
  },
  {
    text: 'İlkadım\'da muhasebe ofisimiz için düzenli toner dolumu yaptırıyoruz. Fiyat-kalite açısından Samsun\'un en iyisi.',
    name: 'Ayşe Kaya',
    role: 'Mali Müşavir, İlkadım',
    init: 'AK',
  },
  {
    text: 'Gece 11\'de yazıcımız bozuldu. Aradım, sabah erken saatte kurye geldi. 7/24 hizmet gerçekten çalışıyor!',
    name: 'Hasan Demir',
    role: 'Avukat, Canik',
    init: 'HD',
  },
]

const blogPosts = [
  {
    slug: 'yazici-neden-cizgili-cikiyor',
    category: 'Sorun Giderme',
    title: 'Yazıcınız Neden Çizgili Çıkarıyor? 5 Neden ve Çözümü',
    desc: 'Toner kartuşunuzun ömrü dolmuş olabilir ya da drum ünitesi kirlenmiş olabilir. İşte en yaygın 5 sebep...',
    readTime: '4 dk',
    date: '15 Aralık 2024',
  },
  {
    slug: 'orijinal-toner-vs-profesyonel-dolum',
    category: 'Karşılaştırma',
    title: 'Orijinal Toner mu, Profesyonel Dolum mu? Gerçek Karşılaştırma',
    desc: 'Maliyet, baskı kalitesi ve yazıcı ömrü açısından kapsamlı bir karşılaştırma yapıyoruz...',
    readTime: '6 dk',
    date: '10 Aralık 2024',
  },
  {
    slug: 'kagit-sikismasi-cozumu',
    category: 'Teknik Rehber',
    title: 'HP Yazıcı Kağıt Sıkışması: Evde Çözebileceğiniz 3 Adım',
    desc: 'Kağıt sıkışması en yaygın yazıcı sorunlarından biridir. Servise göndermeden önce deneyin...',
    readTime: '3 dk',
    date: '5 Aralık 2024',
  },
]

export default function Home() {
  return (
    <div className="home">
      <Seo
        title="Samsun Toner Dolumu ve Motorlu Toner Dolumu Servisi | Teknoklinik 7/24"
        description="Samsun toner dolumu ve motorlu toner dolumu servisi. Atakum, İlkadım, Canik, Tekkeköy'e 7/24 motorlu kurye ile 30 dakikada kapınızda. HP, Canon, Brother, Epson garantili dolum ve yazıcı tamiri."
        keywords="samsun toner dolumu, samsun motorlu toner dolumu servisi, motorlu toner dolumu, samsun toner dolum, atakum toner dolumu, ilkadım yazıcı tamiri, canik kartuş yenileme, tekkeköy teknik servis, yazıcı tamiri samsun, 7/24 kurye toner"
        path="/"
        jsonLd={homeJsonLd}
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Samsun toner dolumu ve yazıcı tamiri — Teknoklinik motorlu kurye servisi" className="hero-img" fetchpriority="high" decoding="async" width="1920" height="1080" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge reveal">
              <span className="pulse-dot" />
              <span>Samsun Genelinde Kuryelerimiz Aktif</span>
            </div>
            <h1 className="hero-h1 reveal reveal-delay-1">
              Samsun Toner Dolum ve Yazıcı Tamiri{' '}
              <span className="gradient-text">| 7/24 Kapıdan Teslim</span>
            </h1>
            <p className="hero-desc reveal reveal-delay-2">
              Samsun toner dolumu ve <strong>motorlu toner dolumu servisi</strong>: Atakum, İlkadım, Canik, Tekkeköy'e motorlu kurye ile <strong>30 dakikada</strong> kapınızdayız.
              HP, Canon, Brother, Epson — tüm markalar garantili dolum ve onarım.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <a
                href="https://wa.me/905453422944?text=Merhaba!%20Kurye%20g%C3%B6ndermek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                🛵 Kurye Çağır
              </a>
              <a href="tel:+905453422944" className="btn btn-secondary btn-lg">
                📞 Hemen Ara
              </a>
            </div>
            <div className="hero-stats reveal reveal-delay-4">
              <div className="hero-stat">
                <span className="hero-stat-num">2.500+</span>
                <span className="hero-stat-label">Mutlu Müşteri</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">30 Dk</span>
                <span className="hero-stat-label">Ortalama Teslimat</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">%100</span>
                <span className="hero-stat-label">Garanti</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            {trustItems.map((item, i) => (
              <div key={i} className="trust-item reveal" style={{transitionDelay: `${i * 0.08}s`}}>
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <div className="trust-title">{item.title}</div>
                  <div className="trust-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">⚡ Hizmetlerimiz</div>
            <h2 className="section-title reveal reveal-delay-1">Yazıcı Sorunlarınızı <br />Hızla Çözüyoruz</h2>
            <p className="section-desc reveal reveal-delay-2">
              Profesyonel ekibimiz ve 7/24 aktif kurye hizmetimiz ile Samsun'un her noktasına ulaşıyoruz.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-card service-card--${s.color} reveal`} style={{transitionDelay:`${i*0.12}s`}}>
                <div className="service-icon-wrap">
                  <span className="service-icon">{s.icon}</span>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map(f => (
                    <li key={f}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
                <Link to={s.link} className="service-link">
                  Detaylı Bilgi <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">🛵 Nasıl Çalışır?</div>
            <h2 className="section-title reveal reveal-delay-1">3 Adımda <span className="gradient-text">Çözüm</span></h2>
            <p className="section-desc reveal reveal-delay-2">Kurye hizmetimiz son derece basit ve hızlı çalışır.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className={`step-card reveal reveal-delay-${i+1}`}>
                <div className="step-number">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
          <div className="how-cta reveal">
            <a
              href="https://wa.me/905453422944?text=Merhaba!%20Kurye%20g%C3%B6ndermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              🛵 Hemen Kurye İste
            </a>
            <Link to="/kurye-hizmeti" className="btn btn-outline btn-lg">
              Nasıl Çalışır?
            </Link>
          </div>
        </div>
      </section>

      {/* TONER SECTION */}
      <section className="section toner-section">
        <div className="container toner-grid">
          <div className="toner-image reveal">
            <img src={tonerImg} alt="Samsun toner dolumu — HP, Canon, Brother, Epson garantili dolum" loading="lazy" decoding="async" />
            <div className="toner-badge">
              <span>🔒</span>
              <div>
                <div className="toner-badge-title">Garantili Dolum</div>
                <div className="toner-badge-sub">3 Ay Yazılı Garanti</div>
              </div>
            </div>
          </div>
          <div className="toner-content">
            <div className="section-label reveal">🖨️ Toner Dolumu</div>
            <h2 className="reveal reveal-delay-1">Atakum'dan Tekkeköy'e <br /><span className="gradient-text">Garantili Toner Dolumu</span></h2>
            <p className="reveal reveal-delay-2" style={{marginTop:'16px'}}>
              HP LaserJet, Canon imageCLASS, Brother HL ve Epson AL serisi yazıcılarınız için
              profesyonel Samsun toner dolumu yapıyoruz. Motorlu toner dolumu servisi ile kartuşunuzu kapınızdan alır, dolum sonrası test baskısı ve 3 ay yazılı garanti ile iade ederiz.
            </p>
            <div className="toner-brands reveal reveal-delay-3">
              {brands.map(b => (
                <div key={b.name} className="brand-chip" style={{'--brand-color': b.color}}>
                  {b.name}
                </div>
              ))}
            </div>
            <div className="toner-features reveal reveal-delay-4">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Kapasite Kaybı Yok</h4>
                  <p>Orjinal kapasitede dolum yapılır</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Test Baskısı Dahil</h4>
                  <p>Her dolum sonrası kontrol yapılır</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>%70 Tasarruf</h4>
                  <p>Orijinal tonerden çok daha ekonomik</p>
                </div>
              </div>
            </div>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginTop:'24px'}}>
              <Link to="/toner-dolumu" className="btn btn-primary btn-lg reveal reveal-delay-4">
                Fiyat Al
              </Link>
              <Link to="/kurye-hizmeti" className="btn btn-outline btn-lg reveal reveal-delay-4">
                Kurye İste
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COURIER SECTION */}
      <section className="section courier-section">
        <div className="container courier-grid">
          <div className="courier-content">
            <div className="section-label reveal">🛵 7/24 Kurye</div>
            <h2 className="reveal reveal-delay-1">
              <span className="gradient-text">30 Dakikada</span><br />Kapınızdayız
            </h2>
            <p className="reveal reveal-delay-2" style={{marginTop:'16px'}}>
              Samsun'un dört bir yanına — Atakum toner dolumu, İlkadım yazıcı tamiri, 
              Canik kartuş yenileme, Tekkeköy teknik servis — motorlu kuryelerimiz 7/24 aktif.
            </p>
            <div className="coverage-grid reveal reveal-delay-3">
              {['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'].map(c => (
                <div key={c} className="coverage-chip">
                  <span>📍</span> {c}
                </div>
              ))}
            </div>
            <Link to="/kurye-hizmeti" className="btn btn-primary btn-lg reveal reveal-delay-4" style={{marginTop:'28px'}}>
              🛵 Kurye Hizmetini İncele
            </Link>
          </div>
          <div className="courier-image reveal">
            <img src={kuryeImg} alt="Samsun motorlu toner dolumu servisi — 7/24 kurye teslimat" loading="lazy" decoding="async" />
            <div className="courier-badge">
              <div className="courier-badge-inner">
                <span className="pulse-dot" />
                <div>
                  <div className="courier-badge-title">Kuryeler Aktif</div>
                  <div className="courier-badge-sub">Samsun Geneli · 7/24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-sm brands-section">
        <div className="container">
          <p className="brands-label">Tüm Markaları Destekliyoruz</p>
          <div className="brands-row">
            {brands.map(b => (
              <div key={b.name} className="brand-pill reveal">
                <span className="brand-dot" style={{background: b.color}} />
                {b.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">⭐ Müşteri Yorumları</div>
            <h2 className="section-title reveal reveal-delay-1">Samsun'dan <span className="gradient-text">Gerçek Deneyimler</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card card reveal reveal-delay-${i+1}`}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.init}</div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section blog-preview-section">
        <div className="container">
          <div className="section-header" style={{marginBottom:'40px'}}>
            <div className="section-label reveal">📝 Blog & Rehber</div>
            <h2 className="section-title reveal reveal-delay-1">Yazıcı Sorunları İçin <span className="gradient-text">Bilgi Merkezi</span></h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className={`blog-card card reveal reveal-delay-${i+1}`}>
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read">{post.readTime} okuma</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.desc}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-more">Devamını Oku →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'40px'}}>
            <Link to="/blog" className="btn btn-outline btn-lg reveal">Tüm Yazıları Gör</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-inner reveal">
            <h2>Yazıcınız mı Bozuldu? <span className="gradient-text">Hemen Arayın!</span></h2>
            <p>Samsun genelinde 30 dakikada kapınızdayız. Tamir süresince ücretsiz ikame yazıcı.</p>
            <div className="final-cta-actions">
              <a href="tel:+905453422944" className="btn btn-primary btn-lg">
                📞 0545 342 29 44
              </a>
              <a
                href="https://wa.me/905453422944?text=Merhaba!%20Kurye%20g%C3%B6ndermek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                💬 WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
