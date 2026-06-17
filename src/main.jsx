import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from './App.jsx'
import { ColorProvider } from './components/utils/ColorContext.jsx'
import { LanguageProvider } from './components/utils/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <ColorProvider>
  <StrictMode>
      <App />
  </StrictMode>,
  </ColorProvider>
  </LanguageProvider>
)
