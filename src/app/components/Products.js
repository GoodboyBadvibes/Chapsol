"use client"

import React, { useEffect, useState } from 'react'
import style from "../Styles/Products.module.css"
import Image from 'next/image'
import Button from './Button'

import AOS from 'aos';
import 'aos/dist/aos.css'


const Products = () => {



   const [product, setProduct] = useState("OVS");
   const [productDetail, setProductDetail] = useState("");

    useEffect(() => {

      AOS.init(
        {
          duration:3000,
          delay:100
        }
      )

    changeProduct()
  }, [product])

   const changeProduct = ()=>{
    if(product==='OVS'){
      setProductDetail("OVS (online Vendor Stall) is an online service to business in the ecommerce niche offering free")
    } else if(product==='campaign'){
      setProductDetail("Campaign is an online service to business in the ecommerce niche offering free")
    }else{
      setProductDetail("Community website is an online service to business in the ecommerce niche offering free")
    }
   };
   
  return (
    <>
    <div className="px-5 sm:px-10  md:px-20 " id='products'>

      
      <div className={" sm:flex justify-between gap-20 sm:p-11 transition-all duration-1000"}>

        <div className={' gap-0 sm:w-1/2 mx-auto pb-16 '+ style.btnDiv}>

          <div className={style.btn +' '+(product==='OVS'?style.btnClick:style.btnUnclick)} data-aos="slide-right" data-aos-delay="100" data-aos-duration="1000" onClick={()=>{setProduct("OVS");changeProduct()}}>
             <h1>OVS Studio</h1>
          </div>

          <div className={style.btn +' '+(product==='campaign'?style.btnClick:style.btnUnclick)} data-aos="slide-right" data-aos-delay="150" data-aos-duration="1000" onClick={()=>{setProduct("campaign");changeProduct()}}>
             <h1>Campaign</h1>
          </div>

          <div className={style.btn  +' '+(product==='community'?style.btnClick:style.btnUnclick)} data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" onClick={()=>{setProduct("community");changeProduct()}}>
             <h1>Community Website</h1>
          </div>

        </div>

        <div className=' ' data-aos="" data-aos-delay="100" data-aos-duration="1000">
          <div className={' items-center align-middle m-auto px-32 py-14 '+style.display} style={{alignContent:"center"}}>
            <Image className=' m-auto' src={"/product1.png"} width={512.59} height={289.22} />
            <p className={style.infoTech}>{productDetail.substring(0,78)+(productDetail.length>78?'...':'')}</p>
            <Button  className={style.extBtn} text={"Learn more"} />
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Products