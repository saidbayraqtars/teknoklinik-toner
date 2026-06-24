import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Prerendered static HTML is served to crawlers/AI for full content + fast paint;
// the client then renders fresh over it (avoids hydration text-node mismatches from a
// browser-captured prerender, which lacks SSR text separators).
ReactDOM.createRoot(document.getElementById('root')).render(app)
