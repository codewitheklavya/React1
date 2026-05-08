import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();

  return (
    <div className='py-3 px-5 bg-cyan-700'>
    <button onClick={()=>{
        navigate('/')
      }} 
      className='bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 ease-in-out active:scale-95 active:bg-blue-700 cursor-pointer mt-10 ml-10'>Return to Home Page</button>
    <button onClick={()=>{
        navigate(-1)
      }} 
      className='bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 ease-in-out active:scale-95 active:bg-blue-700 cursor-pointer mt-10 ml-10'>Return Back</button>
    <button onClick={()=>{
        navigate(+1)
      }} 
      className='bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 ease-in-out active:scale-95 active:bg-blue-700 cursor-pointer mt-10 ml-10'>Next</button>
    </div>
  )
}

export default Navbar2
