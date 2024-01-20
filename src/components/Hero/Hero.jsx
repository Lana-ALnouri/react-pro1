import React from 'react'
import './HeroStyle.css'

const Hero = ({image,description}) => {
  return (
    <div className='hero' style={{backgroundImage:`url(${image})`}}>
        <h1>{description}</h1>
    </div>
  )
}

export default Hero