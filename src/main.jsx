import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import { Login } from './components/login/login.jsx';
// import { DataBinding } from './components/data-binding/data-binding.jsx'
// import { DataBinding2 } from './components/data-binding/data-binding2.jsx'
// import { DataBinding3 } from './components/data-binding/data-binding3.jsx'
// import { DateBinding } from './components/data-binding/date-binding.jsx'
// import { Flipkart } from './components/data-binding/flipkart.jsx'
// import { Flipkart1 } from './components/flipkart/flipkart1.jsx'
// import { Inox } from './components/inox/inox.jsx'
import { FakeStore } from './components/fakestore/fakestore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FakeStore />
  </StrictMode>,
)
