import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import kuryeImg from '../assets/images/kurye.png'
import './Pages.css'

const steps = [
  {
    num: '1',
    icon: '📱',
    title: 'Bizi Arayın veya Yazın',
    desc: 'WhatsApp üzerinden mesaj atın veya telefon ile arayın. Adresinizi ve ihtiyacınızı bildirin. 7/24 yanınızdayız.',
    detail: 'WhatsApp, telefon veya web formu ile iletişim kurabilirsiniz.',
  },
  {
    num: '2',
    icon: '🛵',
    title: '30 Dakikada Kapınızda',
    desc: 'En yakın kuryemiz atanır ve 30 dakika içinde adresinize ulaşır. Yazıcınızı veya kartuşunuzu teslim alır.',
    detail: 'Samsun içi ortalama ulaşım süresi 20-30 dakikadır.',
  },
  {
    num: '3',
    icon: '🔧',
    title: 'Profesyonel İşlem',
    desc: 'Teknik merkezimizde toner dolumu veya onarım gerçekleştirilir. Kalite kontrolden geçirilir.',
    detail: 'Toner dolumu 1-2 saat, onarımlar arızaya göre değişir.',
  },
  {
    num: '4',
    icon: '✅',
    title: 'Aynı Gün Teslim',
    desc: 'İşlem tamamlanınca kurye aynı gün tekrar adresinize gelir. Faturalı garanti belgesi ile teslim eder.',
    detail: 'Toner dolumları genellikle aynı gün iade edilir.',
  },
]

const coverage = [
  { name: 'Atakum', time: '20-25 dk', active: true },
  { name: 'İlkadım', time: '15-20 dk', active: true },
  { name: 'Canik', time: '20-30 dk', active: true },
  { name: 'Tekkeköy', time: '25-35 dk', active: true },
  { name: 'Bafra', time: '45-55 dk', active: true },
  { name: 'Çarşamba', time: '40-50 dk', active: true },
  { name: 'Terme', time: '55-70 dk', active: false },
  { name: 'Vezirköprü', time: '60-80 dk', active: false },
]

const kuryeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Samsun Motorlu Toner Dolumu Servisi ve Kurye',
    name: 'Samsun 7/24 Yazıcı ve Toner Motorlu Kurye Hizmeti',
    provider: { '@type': 'LocalBusiness', name: 'Teknoklinik', url: SITE_URL, telephone: '+90-545-342-2944' },
    areaServed: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'].map(n => ({ '@type': 'City', name: `${n}, Samsun` })),
    hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    description: 'Samsun motorlu toner dolumu servisi ve yazıcı kurye hizmeti. 30 dakikada kapınızda, 7/24 aktif. Yazıcı ve kartuşunuzu kapıdan teslim alıp aynı gün iade ederiz.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Kurye Hizmeti', item: `${SITE_URL}/kurye-hizmeti` },
    ],
  },
]

export default function KuryeHizmeti() {
  return (
    <div className="inner-page">
      <Seo
        title="Samsun Motorlu Toner Dolumu Servisi ve 7/24 Kurye | 30 Dakikada — Teknoklinik"
        description="Samsun motorlu toner dolumu servisi ve yazıcı kurye hizmeti. Atakum, İlkadım, Canik, Tekkeköy'e 30 dakikada kapınızda. 7/24 motorlu kurye ile kapıdan teslim ve aynı gün iade."
        keywords="samsun motorlu toner dolumu servisi, motorlu toner dolumu, samsun yazıcı kurye, toner kurye samsun, 7/24 kurye toner, atakum toner kurye, ilkadım toner teslimat"
        path="/kurye-hizmeti"
        jsonLd={kuryeJsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">Kurye Hizmeti</span>
          </div>
          <h1>Samsun 7/24 Yazıcı Kurye Hizmeti | 30 Dakikada Kapınızda</h1>
          <p>Motorlu kurye ağımız ile Samsun'un her noktasına toner dolum ve yazıcı tamiri için hızlı teslim hizmeti sunuyoruz.</p>
          <div className="page-hero-actions">
            <a href="https://wa.me/905453422944?text=Kurye%20göndermek%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              🛵 Hemen Kurye İste
            </a>
            <a href="tel:+905453422944" className="btn btn-secondary btn-lg">📞 Ara</a>
          </div>
        </div>
      </section>

      {/* Live Status Banner */}
      <div className="live-banner">
        <div className="container live-banner-inner">
          <span className="pulse-dot" />
          <strong>Kuryelerimiz Şu An Aktif</strong>
          <span>Samsun genelinde motorlu kuryelerimiz hizmetinizde. 7/24 — Tatil ve gece dahil.</span>
        </div>
      </div>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">🛵 Nasıl Çalışır?</div>
            <h2 className="section-title reveal reveal-delay-1">Kurye Hizmetimiz <span style={{color:'var(--accent)'}}>4 Adımda</span></h2>
            <p className="section-desc reveal reveal-delay-2">Son derece basit ve şeffaf bir süreç ile hızlı hizmet.</p>
          </div>
          <div className="courier-steps">
            {steps.map((step, i) => (
              <div key={i} className={`courier-step card reveal reveal-delay-${i+1}`}>
                <div className="courier-step-num">{step.num}</div>
                <div className="courier-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="courier-step-detail">{step.detail}</div>
                {i < steps.length - 1 && <div className="courier-step-connector" />}
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px'}}>
            <a href="https://wa.me/905453422944?text=Kurye%20göndermek%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg reveal">
              🛵 Kurye İste
            </a>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <div className="coverage-section-grid">
            <div>
              <div className="section-label reveal" style={{display:'inline-flex'}}>📍 Hizmet Bölgeleri</div>
              <h2 className="reveal reveal-delay-1" style={{marginTop:'16px'}}>Samsun'un Her <span style={{color:'var(--accent)'}}>Noktasına</span></h2>
              <p className="reveal reveal-delay-2" style={{marginTop:'16px'}}>Atakum toner dolumu, İlkadım yazıcı tamiri, Canik kartuş yenileme ve Tekkeköy teknik servis dahil tüm ilçelere hizmet veriyoruz.</p>
              <div className="coverage-list reveal reveal-delay-3">
                {coverage.map(c => (
                  <div key={c.name} className={`coverage-row ${!c.active ? 'limited' : ''}`}>
                    <div className="coverage-status">
                      <span className={`status-dot ${c.active ? 'active' : 'limited'}`} />
                      <span className="coverage-name">{c.name}</span>
                    </div>
                    <span className="coverage-time">⏱ {c.time}</span>
                    <span className={`coverage-label ${c.active ? 'active' : ''}`}>
                      {c.active ? 'Aktif' : 'Sınırlı'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="courier-img-wrap reveal">
              <img src={kuryeImg} alt="Samsun motorlu toner dolumu servisi ve yazıcı kurye teslim hizmeti" loading="lazy" decoding="async" style={{borderRadius:'var(--radius-xl)', width:'100%', objectFit:'cover', height:'480px'}} />
              <div className="courier-stats-overlay">
                <div className="courier-stat-item">
                  <div className="courier-stat-num">30 Dk</div>
                  <div className="courier-stat-label">Ortalama Teslimat</div>
                </div>
                <div className="courier-stat-divider" />
                <div className="courier-stat-item">
                  <div className="courier-stat-num">7/24</div>
                  <div className="courier-stat-label">Aktif Hizmet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section courier-final-cta">
        <div className="container">
          <div className="reveal" style={{textAlign:'center'}}>
            <h2 style={{color:'var(--white)', marginBottom:'16px'}}>Hemen Kurye Çağırın!</h2>
            <p style={{color:'rgba(255,255,255,0.7)', marginBottom:'36px', fontSize:'1.1rem'}}>
              Yazıcınızı kapınızdan teslim alıp, işlem tamamlanınca aynı gün iade ediyoruz.
            </p>
            <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="https://wa.me/905453422944?text=Kurye%20göndermek%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                💬 WhatsApp Kurye
              </a>
              <a href="tel:+905453422944" className="btn btn-secondary btn-lg">
                📞 0545 342 29 44
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
