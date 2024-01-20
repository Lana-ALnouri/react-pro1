import React from 'react'
import './TitleStyle.css'

const Title = ({title1 , title2}) => {
  return (
    <>
    <div className='Title'>
        <h2>{title1}</h2>
        <h1>{title2}</h1>
      </div>
    </>
  )
}

export default Title



