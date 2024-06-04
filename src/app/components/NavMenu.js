import React, { useEffect, useState } from 'react'
import style from '../Styles/Nav.module.css'
import Link from 'next/link'
import { useRouter, usePathname } from "next/navigation";
import Button from './Button'

const NavMenu = ({status, fxn}) => {

 const pathname = usePathname()

  const handleScroll = (e,id)=>{
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    fxn();
    // setCurrentSection(id)
  }

const [currentSection, setCurrentSection] = useState('home')
 
useEffect(() => {

  const navLinks = document.querySelectorAll('.navMenuLink')
  const sections = document.querySelectorAll('.section')
  
  console.log(navLinks)
  console.log(sections)

  window.addEventListener('scroll', ()=>{
    sections.forEach( section=>{
      if (window.scrollY >=(section.offsetTop - section.clientHeight)-10) {
        console.log(currentSection)
  console.log(section.id)
        setCurrentSection(section.id)
      }
    })
  navLinks.forEach(navLink => {
   if (navLink.href.includes(currentSection)){
    console.log(currentSection)
    console.log(document.querySelector('.text-standard.activeLink'))
    document.querySelector('.text-standard.activeLink').classList.remove('text-standard')
    navLink.classList.add('text-standard')
    navLink.classList.add('activeLink')
   }
  })
  })


}, [currentSection])


 
  return (
    <>
      <div className={'  ' + style.menu+' '+(status?'':'hidden')} style={{}}>
      <div>
        <div  className=" mt-36 text-center items-center">
            <Link className={" navMenuLink "+(pathname==="/"?" text-standard activeLink ":null)} href={"#home"} onClick={(e)=> handleScroll(e, 'home')} passHref> <h1 className={" "+style.menuText}>Home</h1>  </Link>
            <Link className={" navMenuLink "+(pathname==="/#about"?"text-standard ":null)} href={"#about"} onClick={(e)=> handleScroll(e, 'about')} > <h1 className={" "+style.menuText}>About Us</h1>  </Link>
            <Link className={" navMenuLink "+(pathname==="/#products"?"text-standard ":null)} href={"#products"} onClick={(e)=> handleScroll(e, 'products')} > <h1 className={" "+style.menuText}>Products</h1> </Link>
            <Link className={" navMenuLink "+(pathname==="/#testimonials"?"text-standard ":null)} href={"#testimonials"} onClick={(e)=> handleScroll(e, 'testimonials')} > <h1 className={" "+style.menuText}> Reviews</h1> </Link>
          </div>

          <div className={" w-fit items-center  m-auto " +style.menuText}>
          <Button text={'Contact'} fxn={(e)=> handleScroll(e, 'contact')}/>
        </div>
        </div>
        

      </div>
    </>
  )
}

export default NavMenu