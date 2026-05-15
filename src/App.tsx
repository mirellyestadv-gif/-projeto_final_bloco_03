import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Categorias from './pages/categorias/Categorias'
import Produtos from './pages/produtos/Produtos'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/produtos' element={<Produtos />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App