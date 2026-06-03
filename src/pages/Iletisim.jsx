import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import './Pages.css'

const iletisimJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tecnoklinik Toner Dolum ve Yazıcı Merkezi',
  url: `${SITE_URL}/iletisim`,
  telephone: '+90-545-342-2944',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '19 Mayıs Mahallesi, Dr. Kamil Caddesi No:16/D',
    addressLocality: 'İlkadım',
    addressRegion: 'Samsun',
    postalCode: '55030',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 41.2867, longitude: 36.33 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'].map(n => ({ '@type': 'City', name: `${n}, Samsun` })),
}

export default function Iletisim() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Ad: ${form.name}\nTelefon: ${form.phone}\nHizmet: ${form.service}\nMesaj: ${form.message}`
    )
    window.open(`https://wa.me/905453422944?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div className="inner-page">
      <Seo
        title="İletişim | Samsun Toner Dolumu ve Yazıcı Teknik Servis — Tecnoklinik"
        description="Samsun toner dolumu, yazıcı tamiri ve motorlu toner dolumu servisi için bize ulaşın. 7/24 telefon ve WhatsApp desteği. İlkadım / Samsun adresimizden tüm ilçelere kurye."
        keywords="samsun toner dolumu iletişim, yazıcı tamiri samsun telefon, samsun motorlu toner dolumu servisi, tecnoklinik samsun, toner dolumu whatsapp"
        path="/iletisim"
        jsonLd={iletisimJsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">İletişim</span>
          </div>
          <h1>Bize Ulaşın | Samsun Yazıcı Teknik Servis</h1>
          <p>Toner dolumu, yazıcı tamiri veya kurye hizmeti için 7/24 hizmetinizdeyiz.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 style={{marginBottom:'8px'}}>İletişim <span style={{color:'var(--accent)'}}>Bilgileri</span></h2>
            <p style={{marginBottom:'36px'}}>En hızlı destek için WhatsApp veya telefon tercih edilir. 7/24 yanınızdayız.</p>

            <div className="contact-cards">
              <a href="tel:+905453422944" className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div>
                  <div className="contact-card-title">Telefon / WhatsApp</div>
                  <div className="contact-card-value">0545 342 29 44</div>
                </div>
              </a>
              <a href="tel:+905070055877" className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div>
                  <div className="contact-card-title">Telefon 2</div>
                  <div className="contact-card-value">0507 005 58 77</div>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div>
                  <div className="contact-card-title">Adres</div>
                  <div className="contact-card-value">19 Mayıs Mah. Dr. Kamil Cad. No:16/D, İlkadım / Samsun</div>
                </div>
              </div>
              <div className="contact-card" style={{border:'1px solid rgba(16,185,129,0.3)', background:'rgba(16,185,129,0.05)'}}>
                <div className="contact-card-icon">⏰</div>
                <div>
                  <div className="contact-card-title">Çalışma Saatleri</div>
                  <div className="contact-card-value" style={{color:'var(--success)'}}>7/24 — Tatil dahil</div>
                </div>
              </div>
            </div>

            <div className="contact-regions">
              <h4>Hizmet Bölgeleri</h4>
              <div className="regions-grid">
                {['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'].map(r => (
                  <span key={r} className="region-tag">📍 {r}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <div className="card contact-form-card">
              <h3 style={{marginBottom:'8px'}}>Kurye Talep Formu</h3>
              <p style={{marginBottom:'24px', fontSize:'0.9rem', color:'var(--text-muted)'}}>Formu doldurun, WhatsApp üzerinden anında iletişime geçelim.</p>

              {sent ? (
                <div className="form-success">
                  <div style={{fontSize:'3rem', textAlign:'center', marginBottom:'16px'}}>✅</div>
                  <h4>Mesajınız Gönderildi!</h4>
                  <p>WhatsApp üzerinden kısa sürede dönüş yapacağız. Ortalama yanıt süresi 5 dakikadır.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Adınız Soyadınız" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefon *</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="0532 000 0000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="ornek@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Hizmet Türü *</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Seçiniz</option>
                      <option value="Toner Dolumu">Toner Dolumu</option>
                      <option value="Yazıcı Tamiri">Yazıcı Tamiri</option>
                      <option value="Kurye Teslim">Kurye ile Teslim</option>
                      <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mesajınız</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Yazıcı modelinizi, arızanızı veya talebinizi yazın..." rows={4} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center'}}>
                    💬 WhatsApp ile Gönder
                  </button>
                  <p style={{textAlign:'center', fontSize:'0.8rem', color:'var(--text-light)', marginTop:'12px'}}>
                    Form WhatsApp mesajına dönüştürülerek gönderilir.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="map-section">
        <div className="map-placeholder">
          <div style={{fontSize:'3rem', marginBottom:'16px'}}>🗺️</div>
          <h3>19 Mayıs Mah. Dr. Kamil Cad. No:16/D, İlkadım / Samsun</h3>
          <p style={{marginBottom:'20px'}}>Google Haritalar'da yol tarifi almak için tıklayın.</p>
          <a
            href="https://maps.google.com/?q=19+Mayıs+Mahallesi+Dr.+Kamil+Caddesi+No:16/D+İlkadım+Samsun"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
          >
            📍 Haritada Aç
          </a>
        </div>
      </div>
    </div>
  )
}
