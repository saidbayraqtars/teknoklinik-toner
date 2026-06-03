import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import './Pages.css'

const posts = [
  {
    slug: 'yazici-neden-cizgili-cikiyor',
    category: 'Sorun Giderme',
    title: 'Yazıcınız Neden Çizgili Çıkarıyor? 5 Neden ve Çözümü',
    desc: 'Toner kartuşunuzun ömrü dolmuş olabilir ya da drum ünitesi kirlenmiş olabilir. İşte en yaygın 5 sebep ve evde deneyebileceğiniz çözümler.',
    readTime: '4 dk',
    date: '15 Aralık 2024',
    tags: ['Sorun Giderme', 'Toner', 'HP'],
  },
  {
    slug: 'orijinal-toner-vs-profesyonel-dolum',
    category: 'Karşılaştırma',
    title: 'Orijinal Toner mu, Profesyonel Dolum mu? Gerçek Karşılaştırma',
    desc: 'Maliyet, baskı kalitesi, yazıcı ömrü ve çevre etkisi açısından kapsamlı bir karşılaştırma. Hangisi sizin için daha mantıklı?',
    readTime: '6 dk',
    date: '10 Aralık 2024',
    tags: ['Karşılaştırma', 'Tasarruf'],
  },
  {
    slug: 'kagit-sikismasi-cozumu',
    category: 'Teknik Rehber',
    title: 'HP Yazıcı Kağıt Sıkışması: Evde Çözebileceğiniz 3 Adım',
    desc: 'Kağıt sıkışması en yaygın yazıcı sorunlarından biridir. Servise göndermeden önce bu 3 adımı deneyin.',
    readTime: '3 dk',
    date: '5 Aralık 2024',
    tags: ['HP', 'Sorun Giderme', 'Kağıt Sıkışması'],
  },
  {
    slug: 'atakumda-toner-dolumu',
    category: 'Yerel Rehber',
    title: 'Atakum\'da Toner Dolumu Nerede Yaptırılır?',
    desc: 'Atakum\'da yazıcı kartuşunuzun toneri bittiyse en hızlı ve ekonomik çözüm için bu rehbere bakın.',
    readTime: '3 dk',
    date: '1 Aralık 2024',
    tags: ['Atakum', 'Toner Dolumu', 'Samsun'],
  },
  {
    slug: 'canon-kafa-temizligi',
    category: 'Teknik Rehber',
    title: 'Canon Yazıcı Kafa Temizliği Nasıl Yapılır?',
    desc: 'Canon inkjet yazıcınızda çizgili veya soluk baskı alıyorsanız kafa temizliği yapmanız gerekiyor olabilir.',
    readTime: '5 dk',
    date: '28 Kasım 2024',
    tags: ['Canon', 'Kafa Temizliği', 'Inkjet'],
  },
  {
    slug: 'yazici-bakimi-nasil-yapilir',
    category: 'Bakım Rehberi',
    title: 'Yazıcı Ömrünü Uzatmak için 7 Altın Kural',
    desc: 'Düzenli bakım ile yazıcınızın ömrünü önemli ölçüde uzatabilirsiniz. İşte uzman ekibimizden 7 pratik öneri.',
    readTime: '5 dk',
    date: '20 Kasım 2024',
    tags: ['Bakım', 'Önleyici', 'İpuçları'],
  },
]

const categories = ['Tümü', 'Sorun Giderme', 'Karşılaştırma', 'Teknik Rehber', 'Yerel Rehber', 'Bakım Rehberi']

const blogJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Teknoklinik Yazıcı Rehberi ve Teknik Blog',
    url: `${SITE_URL}/blog`,
    inLanguage: 'tr-TR',
    blogPost: posts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      description: p.desc,
      keywords: p.tags.join(', '),
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  },
]

export default function Blog() {
  return (
    <div className="inner-page">
      <Seo
        title="Yazıcı Rehberi ve Toner Dolum Blogu | Samsun Teknik Servis — Teknoklinik"
        description="Yazıcı sorunları, Samsun toner dolumu rehberleri ve teknik servis ipuçları. HP, Canon, Brother, Epson yazıcılar için uzman içerikler ve çözümler."
        keywords="yazıcı rehberi, toner dolumu rehberi, samsun toner dolumu, yazıcı sorunları, yazıcı bakımı, kağıt sıkışması, kafa temizliği"
        path="/blog"
        jsonLd={blogJsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span className="current">Blog</span>
          </div>
          <h1>Yazıcı Rehberi ve Teknik Blog</h1>
          <p>Yazıcı sorunları, toner dolum rehberleri ve Samsun'da teknik servis hakkında uzman içerikleri.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Categories */}
          <div className="blog-categories reveal">
            {categories.map(c => (
              <button key={c} className={`cat-btn ${c === 'Tümü' ? 'active' : ''}`}>{c}</button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-full-grid">
            {posts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className={`blog-full-card card reveal reveal-delay-${i%3+1}`}>
                <div className="blog-full-cat">{post.category}</div>
                <h3 className="blog-full-title">{post.title}</h3>
                <p className="blog-full-desc">{post.desc}</p>
                <div className="blog-full-tags">
                  {post.tags.map(t => (
                    <span key={t} className="blog-tag">#{t}</span>
                  ))}
                </div>
                <div className="blog-full-footer">
                  <span className="blog-full-date">📅 {post.date}</span>
                  <span className="blog-full-read">⏱ {post.readTime} okuma</span>
                  <span className="blog-full-more">Oku →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <div className="newsletter-box">
        <div className="container newsletter-inner">
          <div>
            <h3>📧 Yazıcı Bakım İpuçları Alın</h3>
            <p>Aylık yazıcı rehberi bültenimize abone olun, sorunlarınızı önleyin.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="E-posta adresiniz" className="newsletter-input" />
            <button className="btn btn-primary">Abone Ol</button>
          </div>
        </div>
      </div>
    </div>
  )
}
