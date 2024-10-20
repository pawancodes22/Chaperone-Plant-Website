import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'

import ProductView from './components/ProductView'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:name" element={<ProductView />} />
    </Routes>
  </BrowserRouter>
)
export default App