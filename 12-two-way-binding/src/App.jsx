import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('  ')

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("form Submited by",title)

    setTitle(' ');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e);
        }} >
        <input type="text" 
        placeholder='enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)//ye pehle set title me set ho rha h, fir title show ho rha h input box me
        }}
        />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
