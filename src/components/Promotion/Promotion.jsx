import React from 'react'
import './PromotionStyle.css'
import ProCards from '../ProCards/ProCards'
import leftImg from './../../assets/img/e1.png'
import rightImg from './../../assets/img/e2.png'


const Promotion = () => {
  let Cards2 =[{
    ProImage:leftImg ,
    subtitle:"Promotion" ,
    bigtitle:"Explore Nature",
    Secbtn:"View Packages",
  },
  {
    ProImage:rightImg ,
    subtitle:"Promotion" ,
    bigtitle:"Explore Nature",
    Secbtn:"View Packages",
  }]
  return(
    <div className='ProCards'>
    {Cards2.map((element , index)=> {return(
            <ProCards key={index} ProImage={element.ProImage} subtitle={element.subtitle}  bigtitle={element.bigtitle}
            Secbtn={element.Secbtn}
            />
        )})}
    </div>
)}
export default Promotion

