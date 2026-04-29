import React, { useState } from 'react'
import {X} from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask)
    console.log(task)

    setTitle('')
    setDetails('')
  }



  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)//splice is use for delete anything, syntax: splice(startIdx, deleteCount(means how much),(optional)items to insert)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 w-1/2 p-10  flex-col items-start '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* first input for heading*/}
         <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <input type="text" 
        className='px-5 w-full font-medium py-2 h-36 outline-none border-2 rounded'
        placeholder='Enter details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        />

        <button className='bg-white font-medium w-full outline-none cursor-pointer text-black py-2 px-5 rounde active:scale-95'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
      <h1 className='text-xl font-bold'>Recent Notes </h1>
       <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} 
          className="relative h-52 w-40 rounded-xl bg-cover bg-[url('https://img.magnific.com/premium-vector/sheet-notebook-paper-with-design-plant-elements3_680802-1230.jpg')] p-5 text-black">
            <h2 onClick={()=>{
              deleteNote(idx)
            }} className='absolute top-5 right-5 bg-red-500 p-1 rounded-full cursor-pointer  '><X /></h2>
            <h3 className='text-xl leading-tight font-bold'>{elem.title}</h3>
            <p className='mt-2 text-gray-700 leading-tight font-medium'>{elem.details}</p>
          </div>
        })}
       </div>
      </div>
    </div>
  )
}

export default App
