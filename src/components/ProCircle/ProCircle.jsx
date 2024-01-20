import React from 'react'
import './ProCircleStyle.css'

const  ProCircle = ({image,title1,title2,description,plans,btn}) => {
  return (
    <div className='father'>
        <div className='child1'>
            <img src={image} alt="" />
        </div>
        <div className='child2'>
            <span>{title1}</span>
            <h1>{title2}</h1>
            <p>{description}</p>
            <img src={plans} alt="" />
            <div className='btn2'>
              <button >{btn}</button>
            </div>
        </div>
    </div>
  )
}

export default ProCircle