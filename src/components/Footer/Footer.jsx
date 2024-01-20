import React from 'react'
import './FooterStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({fimage ,smLogo, group ,social, part1 , menu1 , menu2 , ftitle ,stitle , end }) => {
  return (
    <>
     <div className='footer'  style={{backgroundImage:`url(${fimage})`}}>
        <div className='smLogo'>
            <img src={smLogo} alt="" />
            <p>{part1}</p>
            <img src={group} alt="" />
        </div>
        <div className ='Company'>
          <h2>{ftitle}</h2>
        <ul>
          {menu1.map((element,index) => {return  (
            <li key={index}>{element}</li>
          )})}
        </ul>
        </div>
        <div className='Destinations'>
        <h2>{stitle}</h2>
        <ul>
          {menu2.map((element,index) => {return  (
            <li key={index}>{element}</li>
          )})}
        </ul>
        </div>
    </div>
    <div className='end' >
      <p className='end'>{end}</p>
     </div>
    </>
  )}

export default Footer