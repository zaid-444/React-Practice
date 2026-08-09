import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import { Login } from './components/login/login.jsx';
import { DataBinding } from './components/data-binding/data-binding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataBinding />
  </StrictMode>,
)
