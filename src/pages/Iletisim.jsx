import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

export default function Iletisim() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Ad: ${form.name}\nTelefon: ${form.phone}\nHizmet: ${form.service}\nMesaj: ${form.message}`
    )
    window.open(`https://wa.me/905362551234?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div className="inner-page">
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
              <a href="tel:+903625551234" className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div>
                  <div className="contact-card-title">Sabit Hat</div>
                  <div className="contact-card-value">0362 555 1234</div>
                </div>
              </a>
              <a href="tel:+905362551234" className="contact-card">
                <div className="contact-card-icon">📱</div>
                <div>
                  <div className="contact-card-title">Mobil / WhatsApp</div>
                  <div className="contact-card-value">0536 255 1234</div>
                </div>
              </a>
              <a href="mailto:info@teknoklinik.com.tr" className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div>
                  <div className="contact-card-title">E-posta</div>
                  <div className="contact-card-value">info@teknoklinik.com.tr</div>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div>
                  <div className="contact-card-title">Adres</div>
                  <div className="contact-card-value">Kale Mah. Cumhuriyet Cad. No:42, İlkadım / Samsun</div>
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
          <h3>Kale Mah. Cumhuriyet Cad. No:42, İlkadım / Samsun</h3>
          <p style={{marginBottom:'20px'}}>Google Haritalar'da yol tarifi almak için tıklayın.</p>
          <a
            href="https://maps.google.com/?q=İlkadım+Samsun"
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
