import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import './Pages.css'

export default function NotFound() {
  return (
    <div className="inner-page">
      <Seo
        title="Sayfa Bulunamadı (404) | Teknoklinik Samsun Toner Dolumu"
        description="Aradığınız sayfa bulunamadı. Samsun toner dolumu, yazıcı tamiri ve motorlu toner dolumu servisi için ana sayfamıza dönebilirsiniz."
        path="/404"
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">404</span>
          </div>
          <h1>Sayfa Bulunamadı</h1>
          <p>Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.</p>
          <div className="page-hero-actions">
            <Link to="/" className="btn btn-primary btn-lg">🏠 Ana Sayfa</Link>
            <Link to="/iletisim" className="btn btn-secondary btn-lg">📞 İletişim</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">🔗 Popüler Sayfalar</div>
            <h2 className="section-title">Belki Bunları Arıyorsunuz</h2>
          </div>
          <div className="regions-grid" style={{ justifyContent: 'center' }}>
            <Link to="/toner-dolumu" className="region-tag">🖨️ Samsun Toner Dolumu</Link>
            <Link to="/yazici-tamiri" className="region-tag">🔧 Samsun Yazıcı Tamiri</Link>
            <Link to="/kurye-hizmeti" className="region-tag">🛵 Motorlu Kurye Hizmeti</Link>
            <Link to="/blog" className="region-tag">📝 Yazıcı Rehberi</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
