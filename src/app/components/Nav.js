"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// import {Link, animateScroll as scroll} from 'react-scroll'
import Button from './Button'
import style from '../Styles/Nav.module.css'
import { usePathname } from "next/navigation";
import NavMenu from './NavMenu'
import Link from 'next/link'

const Nav = () => {

  const handleScroll = (e,id)=>{
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }


  // const navLinks = document.querySelectorAll('.navLink')
  // const sections = document.querySelectorAll('.section')
  // let currentSection = 'home'
  // console.log(navLinks)

let currentSection = 'home'
useEffect(() => {

  const navLinks = document.querySelectorAll('.navLink')
  const sections = document.querySelectorAll('.section')
  
  console.log(navLinks)
  console.log(sections)

  window.addEventListener('scroll', ()=>{
    sections.forEach( section=>{
      if (window.scrollY >=(section.offsetTop - section.clientHeight)-10) {
        console.log(currentSection)
  console.log(section.id)
        currentSection = section.id
      }
    })
  navLinks.forEach(navLink => {
   if (navLink.href.includes(currentSection)){
    console.log(currentSection)
    console.log(document.querySelector('.text-standard.active'))
    document.querySelector('.text-standard.active').classList.remove('text-standard')
    document.querySelector('.active').classList.remove('active')
    navLink.classList.add('text-standard')
    navLink.classList.add('active')
   }
  })
  })


}, [currentSection])



  const pathname = usePathname()

   const [menu, setMenu] = useState(false)

  return (
    
    <>

    <div className={' flex justify-between items-center px-5 py-3 sm:px-10 sm:py-6 md:px-20 md:py-12 fixed mb-96 '+(menu?' ':style.nav)} style={{width:'100%', backgroundColor:menu?'white':''}}>

      

       <div className='sm:block hidden'>
         <Image src={'/logo.png'} width={200} height={200} />
       </div>

       <div className=' sm:hidden'>
         <Image src={'/logo.png'} width={150} height={150} />
       </div>

       <div className={' sm:flex justify-between hidden '+style.links} style={{justifyContent:'space-between', justifyItems:'space-between'}}>
        <div className={' flex justify-between items-center '+style.mlinks} >
          <Link  className={" navLink "+(pathname==="/"?"text-standard active":null)} href={"#home"}  > <h1> Home </h1></Link>
          <Link  className={" navLink "+(pathname==="/#about"?"text-standard":null)} href={"#about"}  onClick={(e)=> handleScroll(e, 'about')}> <h1> About us </h1></Link>
          <Link  className={" navLink "+(pathname==="/#products"?"text-standard":null)}  href={"#products"} onClick={(e)=> handleScroll(e, 'products')}> <h1> Products </h1></Link>
          <Link  className={" navLink "+(pathname==="/#reviews"?"text-standard":null)} href={"#testimonials"}  onClick={(e)=> handleScroll(e, 'testimonials')}> <h1> Reviews </h1></Link>
        </div>

        <Button text={"contact"} fxn={(e)=> handleScroll(e, 'contact')}/>
       </div>


       {!menu &&<div className=' sm:hidden'>
        <i className={' ri-menu-fill text-standard text-3xl sm:text-6xl cursor-pointer'} onClick={()=>{setMenu(true)}}></i> 
       </div>}

       {menu && <div className=' sm:hidden'> 
        <i className={' ri-close-fill text-standard text-3xl sm:text-6xl cursor-pointer'} onClick={()=>{setMenu(false)}}></i> 
       </div>}


       <NavMenu status={menu} fxn={()=>{
        setMenu(false)
       }}/>

    

    </div>
     
 </>

  )
}

export default Nav
