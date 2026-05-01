import React from 'react'

const Button = ({index, setIndex,setUserData}) => {
  return (
    <div>
            <div className='flex justify-center items-center p-4 gap-5'>
            <button
                style={{opacity: index == 1 ? 0.4 : 1}} 
            className='bg-amber-400 text-black px-3 py-1 rounded cursor-pointer active:scale-95'
            onClick={()=>{
              if(index>1){
                setIndex(index-1)
                setUserData([])
              }
              
            }}
            >
              Prev
            </button>
            <h4>Page {index}</h4>
            <button className='bg-amber-400 text-black px-3 py-1 rounded cursor-pointer active:scale-95'
            onClick={()=>{
              setUserData([])
              setIndex(index+1)
              
            }}
            >
              Next
            </button>
          </div>
    </div>
  )
}

export default Button
