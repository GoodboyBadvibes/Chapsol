import React from 'react'
import style from '../Styles/Button.module.css'

const Button = ({text,className='',fxn=null, styl={}}) => {
  return (
    <>
      <div className={'bg-standard w-fit block hover:bg-standarddark cursor-pointer transition-all duration-500 hover:shadow-2xl text-standard '+ style.button+' '+className} style={{...styl}} onClick={fxn}>
        <h1> {text} </h1>
      </div>
    </>
  )
}

export default Button