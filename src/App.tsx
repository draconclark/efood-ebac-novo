import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Restaurant } from './pages/Restaurant'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
