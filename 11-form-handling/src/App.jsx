import React from 'react'

const App = () => {


  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("form Submited")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e);
        }} >
        <input type="text" placeholder='enter your name' />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
