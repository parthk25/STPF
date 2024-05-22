import React from 'react'

const Food = (props) => {
  return (
    <>
     <h3 className='text-center mt-5 mb-4'>{props.title}</h3>
      <img src={props.img} alt="clth" width="20%" height="auto" /> 
    </>
  )
}

export default Food
