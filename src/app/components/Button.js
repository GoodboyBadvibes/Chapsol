import React from 'react'
import style from '../Styles/Button.module.css'

const Button = ({text,className='',fxn=null}) => {
  return (
    <>
      <div className={'bg-standard w-fit block hover:bg-standarddark cursor-pointer transition-all duration-500 hover:shadow-2xl '+ style.button+' '+className} onClick={fxn}>
        <h1> {text} </h1>
      </div>
    </>
  )
}

export default Button