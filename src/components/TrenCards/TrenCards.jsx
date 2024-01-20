import React from 'react'
import './TrenCardsStyle.css'

const TrenCards = (props) => {
  return (


    <div className='Trend'>
        <img className='conImg' src={props.conImg} alt="" />
        <img className='simg' src={props.simg} alt="" />
        <div className='section'>
          <img className='trcard' src={props.trcard} alt="" />
          <div className='country'>
            <h1 className='count'>{props.count}</h1>
            <div className='stars'>
            <img src={props.star1} alt="" />
            <img src={props.star2} alt="" />
            <img src={props.star3} alt="" />
            <img src={props.star4} alt="" />
            <img src={props.star5} alt="" />
            </div>
          </div>
          <p>{props.definetion}</p>
          <button>{props.btn}</button>
        </div>
    </div>

  )
}

export default TrenCards





