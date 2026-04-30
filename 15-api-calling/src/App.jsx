import React,{useState} from 'react'
import axios from 'axios'


const App = () => {

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  //   const data = await response.json();
    
  //   console.log(data)
  // }

  // const getData = async ()=>{
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(res.data);
  // }


  const [data, setData] = useState([])

  const getData = async()=>{
    const res = await axios.get('https://picsum.photos/v2/list');
    setData(res.data);
  }


  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Heloo {elem.author} {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App
