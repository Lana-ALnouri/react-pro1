import React from 'react'
import './CCountryStyle.css'
import Country from '../Country/Country'
import Maldives from './../../assets/img/city-1.png'
import Switzerland from './../../assets/img/city-2.png'
import Berlin from './../../assets/img/city-3.png'
import Torronto from './../../assets/img/city-4.png'
import Baku from './../../assets/img/city-5.png'
import Chinese from './../../assets/img/city-6.png' 
import vector from './../../assets/img/Vector (1).svg'


const CCountry = () => {
    let CountryList =   [{
        image : Maldives,
        lineL : "27, September 2022",
        lineR : "120+ People",
        title : "Maldives",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "3000 $",
        vector :vector,
        rate : " 5.0",
    },{
        image : Switzerland,
        lineL : "13, October 2023",
        lineR : "120+ People",
        title : "Switzerland",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "1290  $",
        vector :vector,
        rate : " 4.9",
    },{
        image : Berlin,
        lineL : "2, November 2022",
        lineR : "139+ People",
        title : "Berlin",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "2790 $",
        vector :vector,
        rate : " 5.0",
    },{
        image : Torronto,
        lineL : "14, December 2022",
        lineR : "50+ People",
        title : "Torronto",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "1110 $",
        vector :vector,
        rate : " 4.0",
    },{
        image : Baku,
        lineL : "20, September 2022",
        lineR : "80+ People",
        title : "Baku",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "1220 $",
        vector :vector,
        rate : " 4.5",
    },{
        image : Chinese,
        lineL : "27, August 2022",
        lineR : "100+ People",
        title : "Chinese",
        description : "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
        price : "2500 $",
        vector :vector,
        rate : " 5.0",
    },
]
  return (
    <div className='Country'>
        {CountryList.map((element , index)=> {return(
            <Country key={index} image={element.image} lineL={element.lineL}  
            lineR={element.lineR} title={element.title} description={element.description}
            price={element.price}  vector={element.vector} rate={element.rate} />
        )})}
    </div>
  )
}


export default CCountry

