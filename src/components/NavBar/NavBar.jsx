import React, { useState } from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'



const NavBar = ({logo , menu ,btn ,menubar , close}) => {
  const [secmenu,setsecmenu] = useState(false)
  const [closemenu,setclosemenu] = useState(false)

  return (
    <div className='NavBar'>
        <img src={logo} alt="" className='logo' />
        <div className='firmenu'>
            <ul>
                {menu.map ((element,index)=>{return(
                    <a key={index}><Link to={element.path} >{element.title}</Link>
                </a>
                )})}
        <button>{btn}</button>
        </ul>
        <button className='menubar' onClick={()=>{
          setsecmenu(!secmenu)
        }}>
            <img src={menubar} alt="" />
          </button>
        </div>
        <div className='sideBar'> 
        <ul className='list' style={{display:(secmenu)? "block" : "none"}}>
        <button className='close' onClick={()=>{
            setclosemenu(!closemenu)
          }} >
            <img src={close} alt="" />
          </button>
          {menu.map ((element,index)=>{return(
                    <a key={index}><Link to={element.path} >{element.title}</Link>
                </a>
                )})}
                
                  <button>{btn}</button>
        </ul>
        </div>
    </div>
  )
}

export default NavBar

