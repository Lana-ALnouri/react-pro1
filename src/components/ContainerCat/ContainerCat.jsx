import React from 'react'
import './ContainerCatStyle.css'
import Cards from '../Cards/Cards'
import guided from './../../assets/img/service-1.png'
import flight from './../../assets/img/service-2.png'
import religious from './../../assets/img/service-3.png'
import Medical from './../../assets/img/service-4.png'

const ContainerCat = () => {
    let Cards1 =   [{
        image:guided,
        title:"Guided Tours",
        description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        image:flight,
        title:"Best Flights Options",
        description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        image:religious,
        title:"Religious Tours",
        description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        image:Medical,
        title:"Medical insurance",
        description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    }]
  return (
    <div className='Cards'>
        {Cards1.map((element , index)=> {return(
            <Cards key={index} image={element.image} title={element.title}  description={element.description}/>
        )})}
    </div>
  )
}

export default ContainerCat






