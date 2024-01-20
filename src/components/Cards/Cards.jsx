import React from 'react'
import './CardsStyle.css'

const Cards = (props) => {
  return (
        <div className='sCards'>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
  )
}

export default Cards