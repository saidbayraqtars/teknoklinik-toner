import { useParams, Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import './Pages.css'

const articles = {
  'yazici-neden-cizgili-cikiyor': {
    category: 'Sorun Giderme',
    title: 'Yazıcınız Neden Çizgili Çıkarıyor? 5 Neden ve Çözümü',
    date: '15 Aralık 2024',
    iso: '2024-12-15',
    readTime: '4 dk',
    content: `
      <p>Yazıcınızdan çizgili veya bantlı baskılar çıkıyorsa, büyük ihtimalle aşağıdaki nedenlerden biri söz konusudur. İşte en yaygın 5 sebep ve çözüm önerileri:</p>
      
      <h3>1. Toner Kartuşu Ömrü Dolmuş</h3>
      <p>En yaygın neden budur. Toner miktarı azaldığında baskılar soluk ve çizgili çıkmaya başlar. Çözüm: Kartuşu çıkarıp yatay olarak birkaç kez sallayın — bu geçici çözüm bir süre daha baskı almanızı sağlar. Kalıcı çözüm olarak toner dolumu yaptırın.</p>
      
      <h3>2. Drum (OPC) Ünitesi Kirlendi</h3>
      <p>Drum ünitesi üzerindeki kir, toz veya çizikler baskılara yansır. Drum genellikle toner ile birlikte veya ayrı olarak değiştirilebilir. <strong>Atakum ve İlkadım'da drum değişimi için 7/24 kurye hizmetimizden yararlanabilirsiniz.</strong></p>
      
      <h3>3. Kağıt Yolu Kirlenmiş</h3>
      <p>Kağıt silindirleri üzerindeki kir, baskı kalitesini olumsuz etkiler. Yumuşak bez ile silindirleri temizlemek genellikle işe yarar.</p>
      
      <h3>4. Fuser Ünitesi Arızalı</h3>
      <p>Toner kağıda yapışmıyorsa veya kolayca sürülüyorsa fuser ünitesi arızalı olabilir. Bu bir teknik servis işlemidir — bize ulaşın.</p>
      
      <h3>5. Düşük Kaliteli Kağıt</h3>
      <p>Çok ince veya pürüzlü kağıtlar baskı kalitesini düşürür. 80 gram/m² standart ofis kağıdı kullanmanızı öneririz.</p>
      
      <div class="article-cta-box">
        <h4>🛵 Hâlâ Sorun Devam Ediyor mu?</h4>
        <p>Tecnoklinik ekibi Samsun genelinde 7/24 kapınızdadır. Kurye çağırın, yazıcınızı teslim alıp aynı gün çözüm sunarız.</p>
        <a href="https://wa.me/905453422944?text=Yazıcımdan%20çizgili%20baskı%20alıyorum,%20destek%20istiyorum." target="_blank" rel="noopener noreferrer">WhatsApp ile Destek Al →</a>
      </div>
    `,
  },
  'orijinal-toner-vs-profesyonel-dolum': {
    category: 'Karşılaştırma',
    title: 'Orijinal Toner mu, Profesyonel Dolum mu? Gerçek Karşılaştırma',
    date: '10 Aralık 2024',
    iso: '2024-12-10',
    readTime: '6 dk',
    content: `
      <p>Bu soru binlerce ofis ve bireysel kullanıcının aklını meşgul etmektedir. İşte kapsamlı bir karşılaştırma:</p>
      
      <h3>💰 Maliyet</h3>
      <p>Orta segment bir HP LaserJet için orijinal toner yaklaşık 400-600 TL'ye mal olurken, profesyonel dolum ile bu maliyet 180-280 TL'ye düşmektedir. Yıllık bazda bu %50-60 oranında tasarruf anlamına gelir.</p>
      
      <h3>🖨️ Baskı Kalitesi</h3>
      <p>Profesyonel ekipman ve kaliteli uyumlu toz kullanıldığında baskı kalitesi orijinale çok yakındır. Dolum sonrası yapılan test baskısı ile kalite doğrulanır.</p>
      
      <h3>🔧 Yazıcı Ömrüne Etkisi</h3>
      <p>Profesyonel olarak yapılan dolum yazıcıya zarar vermez. Aksine, düzenli bakım ve temizlik ile yazıcı ömrü uzar. Önemli olan kaliteli toz ve doğru teknik kullanımıdır.</p>
      
      <h3>🌱 Çevre</h3>
      <p>Kartuş dolumu, plastik atığı önemli ölçüde azaltır. Her dolum, bir kartuşun çöpe gitmesini engeller.</p>
      
      <h3>Sonuç</h3>
      <p>Profesyonel dolum; maliyet, çevre etkisi ve yazıcı ömrü açısından net bir kazanan. Baskı kalitesi ise deneyimli bir servis ile orijinale eşdeğerdir.</p>
      
      <div class="article-cta-box">
        <h4>🖨️ Garantili Dolum için Bize Ulaşın</h4>
        <p>Samsun'da HP, Canon, Brother, Epson dolumu için 7/24 hizmetinizdeyiz. 3 ay yazılı garanti.</p>
        <a href="https://wa.me/905453422944?text=Toner%20dolumu%20fiyatı%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">Fiyat Al →</a>
      </div>
    `,
  },
  'kagit-sikismasi-cozumu': {
    category: 'Teknik Rehber',
    title: 'HP Yazıcı Kağıt Sıkışması: Evde Çözebileceğiniz 3 Adım',
    date: '5 Aralık 2024',
    iso: '2024-12-05',
    readTime: '3 dk',
    content: `
      <p>HP yazıcınızda kağıt sıkışması yaşıyorsanız paniğe kapılmayın. Servise göndermeden önce bu 3 adımı deneyin:</p>
      
      <h3>Adım 1: Yazıcıyı Kapatın ve Bekleyin</h3>
      <p>Önce yazıcıyı kapatın ve güç kablosunu çekin. Içerideki mekanizmanın tam anlamıyla durmasını bekleyin (30 saniye). Kapağı zorlamamak kritik önem taşır.</p>
      
      <h3>Adım 2: Kağıdı Yavaşça Çekin</h3>
      <p>Sıkışan kağıdı, kağıdın gittiği yön ile aynı doğrultuda yavaş ve sabit bir hareketle çekin. Kesinlikle hızlı veya ani çekiş yapmayın; bu silindirlere zarar verir.</p>
      
      <h3>Adım 3: Kontrol Edin ve Yeniden Başlayın</h3>
      <p>Tüm kağıt parçacıklarını (küçük yırtık parçalar dahil) çıkardıktan sonra kapağı kapatın, güç kablosunu takın ve yazıcıyı yeniden başlatın.</p>
      
      <h3>Sıkışma Tekrarlıyorsa?</h3>
      <p>Kağıt sıkışması sürekli tekrarlıyorsa kağıt besleme silindiri aşınmış olabilir. Bu durumda profesyonel teknik servis gerekir.</p>
      
      <div class="article-cta-box">
        <h4>🔧 Sorun Devam Ediyor mu?</h4>
        <p>İlkadım, Atakum, Canik ve Tekkeköy'e 7/24 kurye ile teknik destek.</p>
        <a href="https://wa.me/905453422944?text=Kağıt%20sıkışması%20sorunu%20için%20destek%20istiyorum." target="_blank" rel="noopener noreferrer">Destek İste →</a>
      </div>
    `,
  },
  'atakumda-toner-dolumu': {
    category: 'Yerel Rehber',
    title: 'Atakum\'da Toner Dolumu Nerede Yaptırılır?',
    date: '1 Aralık 2024',
    iso: '2024-12-01',
    readTime: '3 dk',
    content: `
      <p>Atakum'da yazıcınızın toneri bittiğinde iki seçeneğiniz var: pahalı orijinal kartuş almak ya da mevcut kartuşunuzu profesyonel olarak doldurtmak. Bu rehberde Atakum'da toner dolumunun en hızlı ve en ekonomik yolunu anlatıyoruz.</p>

      <h3>Atakum'da En Hızlı Çözüm: Kapıdan Teslim veya Mağaza</h3>
      <p>Tecnoklinik olarak Atakum'un tüm mahallelerine (Denizevleri, Mimarsinan, Körfez, Cumhuriyet, Atakent ve diğerleri) <strong>7/24 motorlu kurye</strong> hizmeti veriyoruz. Kartuşunuzu işyerinizden veya evinizden teslim alır, dolum sonrası genellikle aynı gün iade ederiz. Atakum'a ortalama ulaşım süremiz <strong>20-25 dakikadır</strong>. Dilerseniz İlkadım'daki mağazamıza bizzat de getirebilirsiniz.</p>

      <h3>Hangi Marka ve Modeller?</h3>
      <p>HP LaserJet, Canon imageCLASS / LBP, Brother HL ve MFC, Epson AL serisi başta olmak üzere Samsung ve Lexmark dahil tüm marka lazer yazıcılara Atakum toner dolumu yapıyoruz. Kartuş modelinizi (örn. HP 05A, Canon 725, Brother TN-2410) WhatsApp'tan iletmeniz net fiyat için yeterli.</p>

      <h3>Fiyat ve Tasarruf</h3>
      <p>Toner dolumu fiyatları markaya göre 250 ₺'den başlar. Orijinal kartuşa kıyasla yaklaşık <strong>%70 tasarruf</strong> sağlarsınız. Düzenli baskı yapan ofisler için bu yıllık bazda ciddi bir maliyet farkı demektir.</p>

      <h3>Neden Profesyonel Dolum?</h3>
      <p>Kaliteli uyumlu toz ve profesyonel ekipmanla yapılan dolum, baskı kalitesini orijinale yakın tutar ve yazıcınıza zarar vermez. Her dolum sonrası test baskısı yapılır ve <strong>3 ay yazılı garanti</strong> verilir.</p>

      <div class="article-cta-box">
        <h4>🛵 Atakum'da Toner Dolumu İçin Kurye Çağırın</h4>
        <p>WhatsApp'tan yazın, kuryemiz 25 dakikada Atakum'da kapınızda. 3 ay garantili dolum.</p>
        <a href="https://wa.me/905453422944?text=Atakum'da%20toner%20dolumu%20için%20kurye%20istiyorum." target="_blank" rel="noopener noreferrer">Kurye İste →</a>
      </div>
    `,
  },
  'canon-kafa-temizligi': {
    category: 'Teknik Rehber',
    title: 'Canon Yazıcı Kafa Temizliği Nasıl Yapılır?',
    date: '28 Kasım 2024',
    iso: '2024-11-28',
    readTime: '5 dk',
    content: `
      <p>Canon mürekkep püskürtmeli (inkjet) yazıcınızda çizgili, soluk veya eksik renkli baskılar alıyorsanız, büyük olasılıkla yazıcı kafası (print head) tıkanmıştır. İyi haber: çoğu durumu evde, yazıcının kendi yazılımıyla çözebilirsiniz. İşte adım adım Canon kafa temizliği.</p>

      <h3>1. Yazılımdan Kafa Temizliği Çalıştırın</h3>
      <p>Windows'ta <strong>Denetim Masası → Aygıtlar ve Yazıcılar</strong> yolundan Canon yazıcınıza sağ tıklayın, <strong>Yazdırma Tercihleri → Bakım (Maintenance)</strong> sekmesine gidin. Buradan <strong>"Kafa Temizliği" (Cleaning)</strong> seçeneğini çalıştırın. Canon IJ Printer Assistant Tool veya Canon yazılımı da aynı menüyü sunar.</p>

      <h3>2. Test Deseni Yazdırın ve Tekrarlayın</h3>
      <p>Temizlik sonrası bir <strong>nozzle (meme) kontrol deseni</strong> yazdırın. Desende kopukluk veya eksik çizgi varsa temizliği 1-2 kez daha tekrarlayın. Her temizlik mürekkep harcadığından, üst üste 3-4 kereden fazla yapmayın.</p>

      <h3>3. Derin Temizlik (Deep Cleaning)</h3>
      <p>Normal temizlik yetmediyse aynı menüdeki <strong>"Derin Temizlik" (Deep Cleaning)</strong> seçeneğini deneyin. Bu işlem daha güçlüdür ama daha çok mürekkep kullanır.</p>

      <h3>4. Kartuşu ve Temas Noktalarını Kontrol Edin</h3>
      <p>Kartuşu çıkarın, alttaki püskürtme bölgesini tüy bırakmayan nemli bir bezle hafifçe silin. Bakır temas noktalarını kuru bezle temizleyin. Kartuş uzun süre kullanılmadıysa mürekkep kurumuş olabilir.</p>

      <h3>5. Ne Zaman Servise Götürmeli?</h3>
      <p>Tüm bu adımlara rağmen baskı düzelmiyorsa kafa kalıcı olarak tıkanmış veya arızalanmış olabilir. Bu durumda profesyonel kafa temizliği veya kafa değişimi gerekir — solvent bazlı ekipmanla yapılan işlem evde yapılamaz.</p>

      <div class="article-cta-box">
        <h4>🔧 Canon Kafası Hâlâ Tıkalı mı?</h4>
        <p>Samsun genelinde 7/24 kurye ile yazıcınızı alıp profesyonel kafa temizliği yapıyoruz. Atakum, İlkadım, Canik, Tekkeköy.</p>
        <a href="https://wa.me/905453422944?text=Canon%20yazıcı%20kafa%20temizliği%20için%20destek%20istiyorum." target="_blank" rel="noopener noreferrer">Destek Al →</a>
      </div>
    `,
  },
  'yazici-bakimi-nasil-yapilir': {
    category: 'Bakım Rehberi',
    title: 'Yazıcı Ömrünü Uzatmak için 7 Altın Kural',
    date: '20 Kasım 2024',
    iso: '2024-11-20',
    readTime: '5 dk',
    content: `
      <p>Düzenli bakım ile yazıcınızın ömrünü yıllarca uzatabilir, arıza ve servis masrafından tasarruf edebilirsiniz. Uzman ekibimizden 7 pratik kural:</p>

      <h3>1. Kaliteli Kağıt Kullanın</h3>
      <p>80 gram/m² standart ofis kağıdı idealdir. Çok ince, nemli veya tozlu kağıtlar silindirleri aşındırır ve kağıt sıkışmasına yol açar.</p>

      <h3>2. Yazıcıyı Tozdan Koruyun</h3>
      <p>Kullanılmadığında kapağını kapatın veya üstünü örtün. Toz, lazer yazıcılarda drum ve optik birime, inkjet'lerde kafaya zarar verir.</p>

      <h3>3. Düzenli Olarak Çıktı Alın</h3>
      <p>Özellikle inkjet yazıcılarda haftada en az birkaç sayfa baskı, mürekkebin kurumasını ve kafanın tıkanmasını önler.</p>

      <h3>4. Orijinal veya Kaliteli Uyumlu Sarf Malzemesi Kullanın</h3>
      <p>Ucuz, denetimsiz toz ve mürekkep yazıcıya kalıcı zarar verebilir. Profesyonel toner dolumu, kaliteli uyumlu toz ile bu riski ortadan kaldırır.</p>

      <h3>5. Yazıcıyı Doğru Kapatın</h3>
      <p>Fişten ani çekmek yerine güç düğmesinden kapatın. Bu, inkjet'lerde kafanın park konumuna gitmesini ve kapanmasını sağlar.</p>

      <h3>6. Yazılım ve Sürücüleri Güncel Tutun</h3>
      <p>Güncel sürücüler bağlantı sorunlarını ve baskı hatalarını azaltır. Üreticinin sitesinden modelinize uygun güncel sürücüyü kurun.</p>

      <h3>7. Periyodik Profesyonel Bakım</h3>
      <p>Yılda bir kez iç temizlik, silindir ve drum kontrolü yaptırmak büyük arızaların önüne geçer. Yoğun kullanılan ofis yazıcıları için bu özellikle önemlidir.</p>

      <div class="article-cta-box">
        <h4>🖨️ Yazıcınıza Profesyonel Bakım</h4>
        <p>Samsun'da 7/24 kurye ile yazıcı bakımı, toner dolumu ve teknik servis. 3 ay garanti.</p>
        <a href="https://wa.me/905453422944?text=Yazıcı%20bakımı%20için%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">Bilgi Al →</a>
      </div>
    `,
  },
}

const defaultArticle = {
  category: 'Rehber',
  title: 'Yazıcı Bakımı ve Teknik Servis',
  date: '2024',
  readTime: '3 dk',
  content: `<p>Bu makale yakında yayınlanacak. Yazıcı sorunlarınız için <a href="tel:+905453422944">bizi arayın</a> veya WhatsApp üzerinden iletişime geçin.</p>`,
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export default function BlogDetail() {
  const { slug } = useParams()
  const article = articles[slug] || defaultArticle
  const path = `/blog/${slug || ''}`
  const desc = stripHtml(article.content).slice(0, 160)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${SITE_URL}${path}`,
      mainEntityOfPage: `${SITE_URL}${path}`,
      image: `${SITE_URL}/og-image.jpg`,
      datePublished: article.iso || '2024-01-01',
      dateModified: '2026-06-24',
      articleSection: article.category,
      inLanguage: 'tr-TR',
      author: { '@type': 'Organization', name: 'Tecnoklinik', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'Tecnoklinik', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` } },
      description: desc,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}${path}` },
      ],
    },
  ]

  return (
    <div className="inner-page">
      <Seo
        title={`${article.title} | Tecnoklinik Samsun`}
        description={desc}
        keywords={`${article.category.toLowerCase()}, samsun toner dolumu, yazıcı tamiri samsun, ${article.title.toLowerCase()}`}
        path={path}
        jsonLd={jsonLd}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span className="current">{article.category}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <article className="article-main">
            <div className="article-header">
              <div className="blog-category">{article.category}</div>
              <h1 className="article-title">{article.title}</h1>
              <div className="article-meta">
                <span>📅 {article.date}</span>
                <span>⏱ {article.readTime} okuma</span>
                <span>✍️ Tecnoklinik Ekibi</span>
              </div>
            </div>
            <div className="article-body" dangerouslySetInnerHTML={{__html: article.content}} />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card card">
              <h4>🛵 Hızlı Destek</h4>
              <p>Samsun genelinde 7/24 motorlu kurye hizmeti.</p>
              <a href="tel:+905453422944" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginBottom:'10px'}}>
                📞 0545 342 29 44
              </a>
              <a href="https://wa.me/905453422944" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width:'100%', justifyContent:'center'}}>
                💬 WhatsApp
              </a>
            </div>
            <div className="sidebar-card card">
              <h4>📂 İlgili Yazılar</h4>
              <ul className="related-links">
                <li><Link to="/blog/yazici-neden-cizgili-cikiyor">Çizgili Baskı Nedenleri</Link></li>
                <li><Link to="/blog/orijinal-toner-vs-profesyonel-dolum">Orijinal vs Dolum Toner</Link></li>
                <li><Link to="/blog/kagit-sikismasi-cozumu">Kağıt Sıkışması Çözümü</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
