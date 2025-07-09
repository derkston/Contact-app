// HOOKS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Components
import App from './App.jsx'
// STYLE
import './index.css'

const root =createRoot(document.getElementById('root')!) ;
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
