'use client'

import Image from "next/image";
import React, { useEffect } from "react";
import Button from "./components/Button";
import style from "./Styles/home.module.css"
import Products from "./components/Products"
import Testimonial from "./components/Testimonial"
import Communication from "./components/communication"
import Footer from "./components/Footer"

import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {


  useEffect(() => {
    AOS.init(
      {
        duration:3000,
        delay:100
      }
    )
   }, [])
  
 

  return (
    <>
    <main className=" section " id="home">
      <div className="px-5 py-5 sm:py-28  sm:px-10  md:px-20 ">
        <div className=" sm:flex justify-between items-center ">
          <div className="lg:w-1/2" data-aos="fade-zoom-in">
            <h1 className={style.header+" pb-11"}>Empower your Business with intuitive software solutions </h1>
            <h2 className={style.content+" pb-11"}>Software Development, Communications and Networking, ICT Integration, Advisory and Consultancy </h2>
            <Button text={"Book a call"} />
          </div>

          <div className={style.headerImage+ " lg:w-1/2"} data-aos="fade-up" data-aos-duration="1000">
            <Image alt="" src={"/Image1.png"} width={666.5} height={717.44} />
          </div>
         </div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          <h1 className={style.header+" pb-5 sm:pb-11 pt-10 section"} id="about" >About Us</h1>
          <h1  className={style.content+" pb-11"}> We're a 21st Century information and Communication technology driven firm with unparalleled commitment in the use and deployment of cutting edge technological solutions to ensure the utmost satisfaction and profitability of our clients and stakeholders all over the Globe. Our Specialized Services which includes but not limited to Software Development, Communications and Networking, ICT Integration, Advisory and Consultancy forms the core of our bond and commitment to our client's. Our team of Vibrant and Visionary tech professionals are consistently saddled with the mission of delivering Our Core Objectives and Goals anytime, anywhere. We're committed to ensuring maximum compliance and adherence to global best practices and standards as we deliver and discharge our corporate goals. We believe in healthy social inclusion as well as in the creation of a healthy environment and work atmosphere that enhancesPotentials, Dreams to be fully harnessed and realized. Our unalloyed commitment to our Core Values of Excellence, Loyalty, Innovations is our passport and ticket to Global Relevance as we use technology to improve the Human Experience. </h1>
        </div>

         <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          <h1 className={style.header+" pb-5 sm:pb-11 pt-12 sm:pt-24"}>Our Products</h1>
          <h1  className={style.content+" pb-11"}> At Chapsol Networks, we pride ourselves on delivering cutting-edge solutions tailored to meet the diverse needs of our clients. Our range of products encompasses innovative solutions designed to enhance connectivity, efficiency, and productivity across various industries.</h1>
         </div>
      </div>
      <div className=" section " id="products" >
        <Products />
      </div>

      <div className=" section " id="testimonials">
         
         <Testimonial  />
      </div>
          <div >
            <div className="px-5 sm:px-10  md:px-20 ">
              <h1 className= {style.header + " text-center py-14 sm:py-28"} >Brands We have worked with</h1>
            </div>

            <div className={' flex flex-wrap gap-5 justify-around items-center py-6 overflow-hidden'+style.sponsors} style={{backgroundColor:'linear-gradient(to right,rgba(156,91,218,0.8),rgba(156,91,218,0.6))',opacity:"50%"}}>
              <Image src={'/unizik.png'} alt="" width={240} height={43}/>
              <Image src={'/upperlink.png'} alt="" width={240} height={43}/>
              {/* <Image src={'/upperlink.png'} alt="" width={240} height={43}/>
              <Image src={'/unizik.png'} alt="" width={240} height={43}/> */}
            </div>
          </div>

          <div id="contact">

         <Communication />
         </div>
         <Footer />
    </main>
        
        
    </>

  )
}