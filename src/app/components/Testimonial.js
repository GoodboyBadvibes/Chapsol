import React from 'react'
import style from '../Styles/testimonial.module.css'
import Image from 'next/image'

const Testimonial = () => {


  const scrollTest = (direction)=>{
    document.querySelector("#testScroll").scrollTo({left: direction==='left'?document.querySelector("#testScroll").scrollLeft-400:document.querySelector("#testScroll").scrollLeft+400,behavior:'smooth'})
  }

  const testimonials = [
    {
      content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      customer:' Dexter Olaniyi',
      career: ' Medical Doctor',
      pic:'/dp.png'
    },
    {
      content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      customer:' Dexter Olaniyi',
      career: ' Medical Doctor',
      pic:'/dp.png'
    },
    {
      content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      customer:' Dexter Olaniyi',
      career: ' Medical Doctor',
      pic:'/dp.png'
    },
    {
      content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      customer:' Dexter Olaniyi',
      career: ' Medical Doctor',
      pic:'/dp.png'
    }
  ]

  return (
    <>
      <div className=' my-14 sm:my-48' id='testimonials section'>
        <div className=' flex-col-reverse sm:flex-row gap-20 flex justify-between items-center'>
          <div className={' flex items-center justify-between overflow-x-scroll w-full sm:w-2/3 ' +style.testScroll} id='testScroll'>
           {
            testimonials.map((index)=>(
              <div key={index} className={style.commentBox + ' bg-standard'}>
              <i className={' ri-double-quotes-l '+style.quotes}></i>
              <h1 className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h1>
              <div className=' flex gap-9 items-center pt-11'>
                <Image src={'/dp.png'} width={64} height={64}/>
                <div>
                  <h1 className={style.customer}> Dexter Olaniyi</h1>
                  <h1 className={style.career}>Medical Doctor</h1>
                </div>
              </div>
            </div>
            ))
           }
          </div>

          <div className=' sm:w-1/3 gap-6 flex-col flex text-center sm:text-start px-5 sm:pr-10  md:pr-20 '>
             <h1 className={style.header + ' text-standard sm:text-start text-center'}> Testimonials</h1>
             <h1 className={style.subHeader +' sm:text-start text-center'}>What Citizens say about us</h1>
             <h1 className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
             <div className='  sm:text-start text-center' >
              <i className={'ri-arrow-left-wide-fill cursor-pointer ' + style.arrow} onClick={()=>{ scrollTest('left')}} ></i>
              <i className={'ri-arrow-right-wide-fill cursor-pointer ' + style.arrow} onClick={()=>{ scrollTest('right')}}></i>
             </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Testimonial