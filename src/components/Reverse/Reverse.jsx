import React from 'react'
import './ReverseStyle.css'

const Reverse = (props) => {
  return (
    <>
    <div className='Reverse'>
      {props.children}
    </div>
  </>
  )
}

export default Reverse