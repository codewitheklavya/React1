import React from 'react'
import Section1 from './components/Section1/Section1' 
import Section2 from './components/Section2/Section2'               

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg',
      intro: ' ',
      tag: 'Satisfied',
    },
    {
      img: 'https://i.pinimg.com/736x/3f/58/60/3f58607b8b46ababef647c1d232be578.jpg',
      intro: ' ',
      tag: 'Satisfied',
    },
    {
      img: 'https://i.pinimg.com/736x/78/23/80/782380412fbb30fe564d04986e971bac.jpg',
      intro: ' ',
      tag: 'Underserved',
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App