import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card.jsx'
import Button from './Components/Button.jsx'


const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(res.data)
  }


  useEffect(function(){
    getData()//call automatic side by side
  },[index])//ab jisme baar index change hoga utne baar automatic call krega function ye useeffect function 

  let printUserData = <h3 className='text-gray-600 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if(userData.length>0){

    printUserData = userData.map((elem,idx)=>{

      return <div key={idx}>
       <Card elem={elem}/>
      </div>
       
    })

  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <h1>{index}</h1>
      
          <div className='flex flex-wrap gap-4'>
            {printUserData}
          </div>
          <Button index={index} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  )
}

export default App
