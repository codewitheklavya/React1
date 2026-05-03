import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
      <h2>this is website</h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Contact'}>Contact</Link>
        <Link to={'/product'}>product</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
