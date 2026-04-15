import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age,props.img)
  return (
    <div className='card'>
        <img src={props.img} alt="placeholder" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, soluta!</p>
        <h1>{props.user}</h1>
        <button>View Profile</button>
    </div>
  )
}

export default Card