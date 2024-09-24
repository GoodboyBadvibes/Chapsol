'use client'

import React, { useEffect } from 'react'
import style from '../Styles/communication.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css'

import message from '../../../public/messageIcon.png'
import phone from '../../../public/PhoneIcon.png'
import Image from 'next/image';

const communication = () => {

  useEffect(() => {

    AOS.init(
      {
        duration:3000,
        delay:100,
      }
    )

}, [])


  return (
    <>
    <div className=" py-14 sm:py-28  sm:px-10  md:px-20 ">

      <div className='  sm:flex items-center justify-between gap-11  sm:mt-40 '>

        <div className={' w-fit '+style.mess } style={{backgroundColor:'#FCFCFC'}}>
         
          <h1 className={style.header+' pb-8 w-fit'}>SEND US A MESSAGE</h1>
            <h1 className={style.subheader+' pb-8 w-4/5'}>Our friendly team would love to hear from you.</h1>

          <form action="" className={style.form}>

              {/* <input className={' ' +style.input} type="select" placeholder='Build a solution or Have a Question?' /> */}
              <select className={' ' +style.input} name="title" id="title">
                <option className={' ' +style.input} value="Build">Build a solution</option>
                <option className={' ' +style.input} value="Question">Have a Question</option>

              </select>

              <div className={'sm:flex items-center justify-start gap-8'}>
                <input  className={' ' +style.input} type="text" placeholder='First name' />
                <input  className={' ' +style.input} type="text" placeholder='Last name' />
              </div>

              <input className={' ' +style.input} type="text"  placeholder='Email e.g You@company.com' />

              <div className={'sm:flex items-center justify-start gap-8'}>
                <input  className={' ' +style.input} type="text" placeholder='Phone number' />
                <input  className={' ' +style.input} type="text" placeholder='State' />
              </div>

              <textarea  className={' ' +style.input} name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
              <div className=' pb-10'>
                <input htmlFor="policy" name='policy'  type="radio" aria-label='dO You agree to our friendly privacy policy.' />
                <label htmlFor="policy" name='policy' className={' '+style.policy }> You agree to our friendly privacy policy.</label>
              </div>


              <div className={' bg-standard '+ style.send}>
                <h1> Send Message</h1>
              </div>




            </form>
         

        </div>



        <div className={style.comm}>

          <div className={style.commCard} style={{backgroundColor:'hsla(210, 3%, 75%, 0.221)',opacity:''}}  data-aos="fade-down" data-aos-delay="100" data-aos-duration="750" >
            <div className={' flex items-center justify-center w-fit rounded-full '+ style.icon}>
              <Image src={message} />
            </div>    
            <h1 className={style.commHeader}>Chat with sales</h1>
            <p className={style.commContent} style={{fontWeight:'300'}}>Speak to our friendly team</p>
            <h2 className={' pt-10 '+style.commContent} style={{fontWeight:'400'}}>chapsolnetworks@gmail.com</h2>
          </div>

          <div className={style.commCard} style={{backgroundColor:'hsla(210, 3%, 75%, 0.221)',opacity:''}}  data-aos="fade-down" data-aos-delay="150" data-aos-duration="750">
            <div className={' flex items-center justify-center w-fit rounded-full '+ style.icon}>
              <Image src={phone} />
            </div>    
            <h1 className={style.commHeader}>Call us</h1>
            <p className={style.commContent} style={{fontWeight:'300'}}>Mon-Fri from 8am to 5pm </p>
            <h2 className={' pt-10 '+style.commContent} style={{fontWeight:'400'}}>+2348131594749</h2>
          </div>
        </div>


        <div>

        </div>

 

      </div>
    </div>
    </>
  )
}

export default communication