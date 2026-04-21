import RightCard from "./RightCard"
import React from "react"

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div className='h-full w-3/4 flex overflow-x-auto flex-nowrap gap-5 p-6'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
        })}
    </div>
  )
}

export default RightContent
