import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import './Pages.css'

const brands = [
  {
    id: 'hp',
    name: 'HP',
    color: '#0096D6',
    icon: '🖨️',
    models: ['HP LaserJet Pro M404', 'HP LaserJet Pro MFP M428', 'HP LaserJet 1020', 'HP Color LaserJet CP1215', 'HP LaserJet P2035', 'HP LaserJet 107w'],
    price: '250 ₺\'den',
    desc: 'HP LaserJet ve Color LaserJet serisi tüm modeller için profesyonel toner dolumu. Orijinal HP tozuyla yapılan dolum, baskı kalitesini orijinal seviyede tutar.',
  },
  {
    id: 'canon',
    name: 'Canon',
    color: '#CC0000',
    icon: '📷',
    models: ['Canon imageCLASS MF3010', 'Canon LBP2900', 'Canon imageCLASS MF4410', 'Canon LBP6030', 'Canon MF237w', 'Canon LBP7010C'],
    price: '270 ₺\'den',
    desc: 'Canon imageCLASS ve LBP serisinin tüm modellerine uyumlu toner dolumu. Canon kartuşları için özel uyumlu toz kullanılır.',
  },
  {
    id: 'brother',
    name: 'Brother',
    color: '#003087',
    icon: '🖥️',
    models: ['Brother HL-L2320D', 'Brother MFC-L2700DW', 'Brother HL-L2360DN', 'Brother DCP-L2540DW', 'Brother HL-L2375DW', 'Brother MFC-L2750DW'],
    price: '260 ₺\'den',
    desc: 'Brother HL ve MFC serisinin tüm modelleri için kaliteli toner dolumu. Drum ünitesi bakımı da eklenerek kapsamlı servis.',
  },
  {
    id: 'epson',
    name: 'Epson',
    color: '#003399',
    icon: '🖨️',
    models: ['Epson AL-M200', 'Epson AL-M300', 'Epson WorkForce AL-M400', 'Epson AcuLaser M1200', 'Epson AcuLaser CX17', 'Epson AL-MX300'],
    price: '280 ₺\'den',
    desc: 'Epson AL ve AcuLaser serisi toner dolumu. Yüksek baskı kalitesi ve uzun ömürlü dolum için özel uyumlu toz kullanılır.',
  },
]

const faqs = [
  {
    q: 'Toner dolumunun garantisi var mı?',
    a: 'Evet, tüm toner dolumlarımız 3 ay yazılı garanti kapsamındadır. Bu süre içinde baskı kalitesinde sorun yaşarsanız ücretsiz yeniden dolum yapıyoruz.',
  },
  {
    q: 'Dolum sonrası baskı kalitesi nasıl olur?',
    a: 'Profesyonel ekipman ve kaliteli uyumlu toz kullanarak dolum yapıyoruz. Dolum sonrası test baskısı yapılır ve orijinal baskı kalitesine yakın sonuç elde edilir.',
  },
  {
    q: 'Yazıcım garanti kapsamında dolum yapılabilir mi?',
    a: 'Evet, toner dolumu yazıcı garantisini etkilemez. Yalnızca kartuşun kendisi değiştirilir, yazıcıya müdahale edilmez.',
  },
  {
    q: 'Kurye ile dolum yaptırabilir miyim?',
    a: 'Evet! Samsun genelinde 7/24 motorlu kurye hizmetimiz mevcuttur. Kartuşunuzu kapınızdan teslim alır, dolum yapıp iade ederiz.',
  },
]

const tonerJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Samsun Toner Dolumu',
    name: 'Samsun Toner Dolumu — HP, Canon, Brother, Epson',
    provider: { '@type': 'LocalBusiness', name: 'Tecnoklinik', url: SITE_URL, telephone: '+90-545-342-2944' },
    areaServed: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy'].map(n => ({ '@type': 'City', name: `${n}, Samsun` })),
    description: 'HP, Canon, Brother, Epson tüm marka yazıcılar için garantili Samsun toner dolumu. Motorlu toner dolumu servisi ile 7/24 kapıdan teslim.',
    offers: brands.map(b => ({ '@type': 'Offer', name: `${b.name} Toner Dolumu`, price: b.price.replace(/[^0-9]/g, ''), priceCurrency: 'TRY' })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Toner Dolumu', item: `${SITE_URL}/toner-dolumu` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export default function TonerDolumu() {
  return (
    <div className="inner-page">
      <Seo
        title="Samsun Toner Dolumu | HP Canon Brother Epson Garantili Dolum — Tecnoklinik"
        description="Samsun toner dolumu: HP, Canon, Brother, Epson tüm markalar için profesyonel ve garantili dolum. Motorlu toner dolumu servisi ile 7/24 kapınızdan teslim alıyoruz. Fiyatlar 250 ₺'den başlar."
        keywords="samsun toner dolumu, motorlu toner dolumu, samsun motorlu toner dolumu servisi, hp toner dolumu samsun, canon toner dolumu, brother toner dolumu, epson toner dolumu, kartuş dolumu samsun"
        path="/toner-dolumu"
        jsonLd={tonerJsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">Toner Dolumu</span>
          </div>
          <h1>Samsun Toner Dolumu | HP, Canon, Brother, Epson</h1>
          <p>Tüm marka ve modeller için garantili, profesyonel Samsun toner dolumu. İlkadım'daki mağazamıza gelebilir veya 7/24 motorlu kurye ile kartuşunuzu kapınızdan teslim ettirebilirsiniz.</p>
          <div className="page-hero-actions">
            <a
              href="https://wa.me/905453422944?text=Toner%20dolumu%20fiyat%20almak%20istiyorum."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Fiyat Al
            </a>
            <a href="tel:+905453422944" className="btn btn-secondary btn-lg">
              📞 Ara
            </a>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">🖨️ Marka Bazlı Hizmet</div>
            <h2 className="section-title reveal reveal-delay-1">Hangi Marka Yazıcınız Var?</h2>
            <p className="section-desc reveal reveal-delay-2">Her marka için özel uyumlu toz ve profesyonel teknik ekip.</p>
          </div>
          <div className="brands-detail-grid">
            {brands.map((brand, i) => (
              <div key={brand.id} id={brand.id} className={`brand-detail-card card reveal reveal-delay-${i%3+1}`}>
                <div className="brand-detail-header" style={{'--brand-color': brand.color}}>
                  <span className="brand-detail-icon">{brand.icon}</span>
                  <div>
                    <div className="brand-detail-name" style={{color: brand.color}}>{brand.name}</div>
                    <div className="brand-detail-price">Fiyatlar <strong>{brand.price}</strong> başlıyor</div>
                  </div>
                </div>
                <p className="brand-detail-desc">{brand.desc}</p>
                <div className="brand-models">
                  <div className="brand-models-title">Desteklenen Modeller</div>
                  <div className="brand-models-grid">
                    {brand.models.map(m => (
                      <span key={m} className="model-chip">{m}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://wa.me/905453422944?text=${encodeURIComponent(`${brand.name} toner dolumu fiyatı almak istiyorum.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{marginTop: '20px', width:'100%', justifyContent:'center'}}
                >
                  💬 {brand.name} Fiyatı Al
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">⚡ Süreç</div>
            <h2 className="section-title reveal reveal-delay-1">Toner Dolum Süreci</h2>
          </div>
          <div className="process-steps">
            {[
              {icon:'📞', title:'İletişim', desc:'WhatsApp veya telefon ile bize ulaşın, kartuş modelinizi bildirin.'},
              {icon:'🛵', title:'Kurye Teslim Alır', desc:'7/24 motorlu kuryemiz kartuşunuzu kapınızdan alır.'},
              {icon:'🔬', title:'Analiz ve Dolum', desc:'Kartuş kontrol edilir, profesyonel ekipmanla dolum yapılır.'},
              {icon:'✅', title:'Test ve İade', desc:'Test baskısı sonrası kurye kartuşu aynı gün iade eder.'},
            ].map((step, i) => (
              <div key={i} className={`process-step reveal reveal-delay-${i+1}`}>
                <div className="process-num">{i+1}</div>
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-container">
          <div className="section-header">
            <div className="section-label reveal">❓ SSS</div>
            <h2 className="section-title reveal reveal-delay-1">Sık Sorulan Sorular</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item card reveal reveal-delay-${i%3+1}`}>
                <h4 className="faq-q">❓ {faq.q}</h4>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="page-cta-box reveal">
            <h3>Hâlâ Sorunuz mu Var?</h3>
            <p>Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.</p>
            <a href="tel:+905453422944" className="btn btn-primary btn-lg">📞 0545 342 29 44</a>
          </div>
        </div>
      </section>
    </div>
  )
}
