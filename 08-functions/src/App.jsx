import React from 'react'

const App = () => {

  function buttonClicked(){
    console.log("button has been clicked")
  }

  return (
    <div>

      {/* <input onChange={function(ele){
        console.log(ele.target.value)
      }} type="text" placeholder='enter name' /> */}
      {/* <h1>hey guys this is eklavya</h1>
      <button onClick={buttonClicked} >click me</button>
      <input onChange={()=>{
        console.log("user is typing")
      }} type="text" placeholder='write' /> */}

    <div onMouseMove={(elem)=>{
      console.log(elem.clientY)
    }} className='box'></div>
    </div>
  )
}

export default App
