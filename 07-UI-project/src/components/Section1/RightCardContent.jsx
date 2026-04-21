import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white p-4 rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold '>{props.id+1}</h2>
        <div>
          <p className='text-lg text-white mb-3  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laborum!</p>
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white font-medium px-5 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
