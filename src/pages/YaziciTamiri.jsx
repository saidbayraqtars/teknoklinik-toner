import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import './Pages.css'

const faultTypes = [
  {
    icon: '📄',
    title: 'Kağıt Sıkışması',
    desc: 'Kağıt besleme mekanizması, silindir veya kartuş bölgesindeki sıkışmaları gideririz. Silindir aşınması varsa değişimi yapılır.',
    symptoms: ['Kağıt yarıda takılıyor', 'Yazıcı kağıt almıyor', 'Kağıt kırışmış çıkıyor'],
    time: '30-60 dk',
    color: '#FF8C00',
  },
  {
    icon: '🖼️',
    title: 'Kafa Temizliği',
    desc: 'Inkjet yazıcılarda tıkanan print head temizlenir. Solvent bazlı profesyonel temizlik ile baskı kalitesi restore edilir.',
    symptoms: ['Çizgili baskı', 'Soluk veya eksik renk', 'Yatay bantlar'],
    time: '45-90 dk',
    color: '#003366',
  },
  {
    icon: '🔌',
    title: 'Anakart Onarımı',
    desc: 'Elektronik arızalar, güç sorunları ve kontrol kartı hasarları için profesyonel elektronik onarım hizmeti.',
    symptoms: ['Yazıcı açılmıyor', 'Hata kodu veriyor', 'LCD çalışmıyor'],
    time: '1-3 gün',
    color: '#0055a5',
  },
  {
    icon: '⚙️',
    title: 'Silindir Değişimi',
    desc: 'Drum ve fuser ünitesi değişimi. Baskı kalitesinin uzun vadede korunması için periyodik bakım.',
    symptoms: ['Soluk baskı', 'Toner kağıda yapışmıyor', 'Leke ve çizgiler'],
    time: '60-90 dk',
    color: '#10B981',
  },
  {
    icon: '🔇',
    title: 'Gürültü Sorunu',
    desc: 'Yatak, silindir ve mekanik aksamdaki aşınmalardan kaynaklanan ses sorunlarının teşhis ve onarımı.',
    symptoms: ['Garip ses geliyor', 'Titreşim var', 'Vıvıldıyor'],
    time: '45-75 dk',
    color: '#7C3AED',
  },
  {
    icon: '📶',
    title: 'Ağ / WiFi Sorunu',
    desc: 'Ağ kartı arızaları, WiFi bağlantı sorunları ve yazıcı driver kurulum desteği.',
    symptoms: ['Ağa bağlanamıyor', 'WiFi görünmüyor', 'Bağlantı kopuyor'],
    time: '30-45 dk',
    color: '#059669',
  },
]

const yaziciJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Samsun Yazıcı Tamiri',
    name: 'Samsun Yazıcı Tamiri ve Teknik Servis',
    provider: { '@type': 'LocalBusiness', name: 'Teknoklinik', url: SITE_URL, telephone: '+90-545-342-2944' },
    areaServed: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy'].map(n => ({ '@type': 'City', name: `${n}, Samsun` })),
    description: 'Kağıt sıkışması, kafa temizliği, anakart onarımı ve tüm yazıcı arızaları için Samsun yazıcı tamiri. Motorlu kurye ile teslim, tamir süresince ücretsiz ikame yazıcı.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Yazıcı Tamiri', item: `${SITE_URL}/yazici-tamiri` },
    ],
  },
]

export default function YaziciTamiri() {
  return (
    <div className="inner-page">
      <Seo
        title="Samsun Yazıcı Tamiri | Aynı Gün Teknik Servis + İkame Yazıcı — Teknoklinik"
        description="Samsun yazıcı tamiri ve teknik servis: kağıt sıkışması, kafa temizliği, anakart onarımı. İlkadım, Atakum, Canik, Tekkeköy'de aynı gün çözüm, motorlu kurye ve ücretsiz ikame yazıcı."
        keywords="samsun yazıcı tamiri, yazıcı teknik servis samsun, ilkadım yazıcı tamiri, atakum yazıcı tamiri, hp yazıcı tamiri samsun, canon yazıcı tamiri, yazıcı anakart onarımı, kağıt sıkışması çözümü"
        path="/yazici-tamiri"
        jsonLd={yaziciJsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">Yazıcı Tamiri</span>
          </div>
          <h1>Samsun Yazıcı Tamiri | Tüm Arızalar için Profesyonel Servis</h1>
          <p>İlkadım, Atakum, Canik ve Tekkeköy'de yazıcı arızalarınızı aynı gün çözüyoruz. Tamir süresince ücretsiz ikame yazıcı.</p>
          <div className="page-hero-actions">
            <a href="https://wa.me/905453422944?text=Yazıcı%20tamiri%20için%20kurye%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              🛵 Kurye Çağır
            </a>
            <a href="tel:+905453422944" className="btn btn-secondary btn-lg">📞 Ara</a>
          </div>
        </div>
      </section>

      {/* Ikame yazici banner */}
      <div className="ikame-banner">
        <div className="container ikame-inner">
          <div className="ikame-icon">🖨️</div>
          <div>
            <strong>Tamir Süresince Ücretsiz İkame Yazıcı</strong>
            <span>Yazıcınız tamirdeyken iş akışınız durmasın. Ücretsiz ikame yazıcı desteği sunuyoruz.</span>
          </div>
          <a href="tel:+905453422944" className="btn btn-primary">Bilgi Al</a>
        </div>
      </div>

      {/* Fault Types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">🔧 Arızalar</div>
            <h2 className="section-title reveal reveal-delay-1">Hangi Arızayı Yaşıyorsunuz?</h2>
            <p className="section-desc reveal reveal-delay-2">Yazıcı arızanızı seçin, hemen çözüme ulaşın.</p>
          </div>
          <div className="faults-grid">
            {faultTypes.map((fault, i) => (
              <div key={i} className={`fault-card card reveal reveal-delay-${i%3+1}`}>
                <div className="fault-header" style={{'--fault-color': fault.color}}>
                  <span className="fault-icon">{fault.icon}</span>
                  <div>
                    <h3 className="fault-title">{fault.title}</h3>
                    <span className="fault-time">⏱ Süre: {fault.time}</span>
                  </div>
                </div>
                <p className="fault-desc">{fault.desc}</p>
                <div className="fault-symptoms">
                  <div className="symptoms-label">Belirtiler:</div>
                  {fault.symptoms.map(s => (
                    <div key={s} className="symptom-chip">⚠️ {s}</div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/905453422944?text=${encodeURIComponent(`${fault.title} sorunu için destek istiyorum.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{marginTop:'16px', width:'100%', justifyContent:'center', fontSize:'0.9rem'}}
                >
                  Bu Sorunu Giderin
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <div className="guarantee-grid">
            <div>
              <div className="section-label reveal" style={{display:'inline-flex'}}>🔒 Garanti</div>
              <h2 className="reveal reveal-delay-1" style={{marginTop:'16px'}}>Onarım <span style={{color:'var(--accent)'}}>Garantisi</span></h2>
              <p className="reveal reveal-delay-2" style={{marginTop:'16px'}}>Tüm onarımlarımız 3 ay garanti kapsamındadır. Aynı arıza tekrarlanırsa ücretsiz yeniden onarım yapılır.</p>
              <div className="guarantee-items">
                {['3 ay yazılı garanti', 'Aynı arıza tekrarında ücretsiz onarım', 'Faturalı hizmet belgesi', 'Orijinal veya uyumlu yedek parça'].map((g,i) => (
                  <div key={i} className={`guarantee-item reveal reveal-delay-${i+1}`}>
                    <span className="guarantee-check">✓</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="guarantee-cta-box reveal">
              <div style={{fontSize:'4rem', textAlign:'center', marginBottom:'16px'}}>🔧</div>
              <h3 style={{textAlign:'center', marginBottom:'12px'}}>Ücretsiz Ön Değerlendirme</h3>
              <p style={{textAlign:'center', marginBottom:'24px'}}>Kuryemiz yazıcınızı teslim aldığında arıza teşhisi ücretsiz yapılır. Fiyat onayınız alınmadan iş başlamaz.</p>
              <a href="https://wa.me/905453422944?text=Yazıcı%20tamiri%20için%20değerlendirme%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center'}}>
                💬 WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
