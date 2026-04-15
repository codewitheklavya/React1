import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Eklavya' age = {18} img = 'https://images.unsplash.com/photo-1775641487797-ee362ba3b600?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user = 'Vinay' age = {16} img = 'https://plus.unsplash.com/premium_photo-1775450651387-2a2085698dad?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user = 'raju' age = {12} img = 'https://images.unsplash.com/photo-1776033615277-6834892c5042?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App