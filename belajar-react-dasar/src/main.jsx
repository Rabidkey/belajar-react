import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './hello-world/HelloWorld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>,
)
