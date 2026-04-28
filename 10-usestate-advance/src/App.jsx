import React, { useState } from 'react'

const App = () => {


  // const [num, setnum] = useState([10,20,30,40]);


  // const btnClick=()=>{
  //   let newNum = [...num];
  //   newNum.push(99);
  //   setnum(newNum)
  // }

  const [num, setNum] = useState(0)

  const btnClick=()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App
