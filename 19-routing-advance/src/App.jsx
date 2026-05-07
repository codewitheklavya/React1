import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Product/Men' element={<Men/>}/>
        <Route path='/Product/Women' element={<Women/>}/>
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
