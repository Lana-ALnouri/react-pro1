import React from 'react'
import './ProCardsStyle.css'

const ProCards = (props) => {
    return (
       <div className='ProCards' >
        <div className='details' style={{backgroundImage:`url(${props.ProImage})`}}>
          <p>{props.subtitle}</p>
          <h1>{props.bigtitle}</h1>
          <button className='Secbtn'>{props.Secbtn}</button>
          </div>
       </div>
    )
  }
  

export default ProCards