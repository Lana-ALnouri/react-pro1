import React from 'react'
import './WanderlustStyle.css'

const Wanderlust = ({girlimage,text,Clickbtn}) => {
  return (
    <div className='Wanderlust' style={{backgroundImage:`url(${girlimage})`}}>
        <h1>{text}</h1>
        <img className='clickbtn' src={Clickbtn} alt="" />
    </div>
  )
}

export default Wanderlust