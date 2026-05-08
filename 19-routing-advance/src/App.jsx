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
import Courses from './pages/Courses.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import Navbar2 from './components/Navbar2.jsx'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>{/*ab kuch bhi likhenge courses ke baad / laga kr toh coursesDetails wali khulegi*/}
        <Route path='/Product' element={<Product/>}>
          <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
        </Route>
        
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
