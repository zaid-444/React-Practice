import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { ConditionalRender } from './components/conditional-render/conditional-render.jsx'
import { ConditionalRender1 } from './components/conditional-render/conditional-render1.jsx'
// import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx'
// import { MouseMove } from './components/mouse-move/mosue-move.jsx'
// import { KeyDemo } from './components/key-demo/key-demo.jsx'
// import { ButtonDemo } from './components/button-demo/button-demo.jsx'
// import { ElementState } from './components/element-state/element-state.jsx'
// import { EMICalculator } from './components/emi-calculator/emi.jsx'
// import { DebounceDemo } from './components/debounce/debounce-demo.jsx'
// import { ThrottleDemo } from './components/throttle/throttle-demo.jsx'
// import { ThrottleDemo1 } from './components/throttle/throttle-demo1.jsx'
// import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
// import { EventBinding1 } from './components/event-binding/event-binding1.jsx'
// import { EventBinding2 } from './components/event-binding/event-binding2.jsx'
// import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
// import { Login } from './components/login/login.jsx';
// import { DataBinding } from './components/data-binding/data-binding.jsx'
// import { DataBinding2 } from './components/data-binding/data-binding2.jsx'
// import { DataBinding3 } from './components/data-binding/data-binding3.jsx'
// import { DateBinding } from './components/data-binding/date-binding.jsx'
// import { Flipkart } from './components/data-binding/flipkart.jsx'
// import { Flipkart1 } from './components/flipkart/flipkart1.jsx'
// import { Inox } from './components/inox/inox.jsx'
// import { FakeStore } from './components/fakestore/fakestore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionalRender />
  </StrictMode>,
)
