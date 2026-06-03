import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollReveal from './components/ScrollReveal'
import Home from './pages/Home'
import TonerDolumu from './pages/TonerDolumu'
import YaziciTamiri from './pages/YaziciTamiri'
import KuryeHizmeti from './pages/KuryeHizmeti'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Iletisim from './pages/Iletisim'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toner-dolumu" element={<TonerDolumu />} />
          <Route path="/yazici-tamiri" element={<YaziciTamiri />} />
          <Route path="/kurye-hizmeti" element={<KuryeHizmeti />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  )
}
