import React, { useContext } from 'react'
import Nav2 from './Nav2'
import Button from './Button'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
        <h2>Eklavya</h2>
        <Nav2 />
        
    </div>
  )
}

export default Navbar
