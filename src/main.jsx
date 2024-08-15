import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MobNavbar from './components/MobNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobNavbar />
    <App />
  </StrictMode>,
)
