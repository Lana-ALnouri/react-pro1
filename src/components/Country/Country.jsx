import React from 'react'
import './CountryStyle.css'

const Country = (props) => {
  return (
    <div className='Bcard'>
        <div className='part1'>
            <img src={props.image} alt="" />
                <div className='date'>
                  <span>{props.lineL}</span>
                  <span>{props.lineR}</span>
                </div>
                <h2>{props.title}</h2>
                <p className='des'>{props.description}</p>
        </div>
            <div className='price'>
              <span>{props.price}</span>
              <img src={props.vector} alt="" className='vector' />
              <span>{props.rate}</span>
            </div>
    </div>
  )
}

export default Country