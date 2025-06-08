import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SkipContextProvider from './provider/SkipContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SkipContextProvider>
    <App />
  </SkipContextProvider>
  </StrictMode>,
)
