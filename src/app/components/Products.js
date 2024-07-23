"use client"

import React, { useEffect, useState } from 'react'
import style from "../Styles/Products.module.css"
import Image from 'next/image'
import Button from './Button'

import AOS from 'aos';
import 'aos/dist/aos.css'


const Products = () => {


const products = [
  {
    name:'OVS Studio',
    nick:'OVS',
    detail:'OVS (online Vendor Stall) is an online service to business in the ecommerce niche offering free',
    image:'/ovs.png'
  },
  {
    name:'Campaign',
    nick:'campaign',
    detail:'Coming soon...',
    image:'/product1.png'
  },
  {
    name:'Community Website',
    nick:'community',
    detail:'Coming soon...',
    image:'/product1.png'
  },
  {
    name:'Virtual Tourism',
    nick:'tourism',
    detail:'Coming soon...',
    image:'/product1.png'
  },
  {
    name:'E-voting',
    nick:'voting',
    detail:'Our E-Voting Platform is an online service to business in the ecommerce niche offering free',
    image:'/product1.png'
  },
  {
    name:'Call Center',
    nick:'call',
    detail:'Coming soon...',
    image:'/product1.png'
  },
]

   const [product, setProduct] = useState(products[0].nick);
   const [selectedProduct, selectProduct] = useState(products[0]);
   const [productDetail, setProductDetail] = useState("");
  //  const [productImage, setProductImage] = useState("/");

  
const handleClick=(product)=>{
  setProduct(product)
}

const getProduct = ()=>{
    products.forEach((p)=>{
        if(p.nick===product){
          selectProduct(p)
        }
    })
}
    useEffect(() => {

      AOS.init(
        {
          duration:3000,
          delay:100
        }
      )

    changeProduct()
    getProduct()
    console.log(selectedProduct)
  }, [product, selectedProduct])

   const changeProduct = ()=>{
    if(product==='OVS'){
      setProductDetail("OVS (online Vendor Stall) is an online service to business in the ecommerce niche offering free")
    } else if(product==='campaign'){
      setProductDetail("Campaign is an online service to business in the ecommerce niche offering free")
    }else if(product==='community'){
      setProductDetail("Community website is an online service to business in the ecommerce niche offering free")
    }else if(product==='tourism'){
      setProductDetail("Our Virtual Tourism is an online service to business in the ecommerce niche offering free")
    }else if(product==='voting'){
      setProductDetail("Our E-Voting Platform is an online service to business in the ecommerce niche offering free")
    }else {
      setProductDetail("Our Contact Call Center operation is an online service to business in the ecommerce niche offering free")
    }
   };
  //  (profile=>({...profile,phone:e.target.value}))}} /> }
   
  return (
    <>
    <div className="px-5 sm:px-10  md:px-20 z-0 " id='products'>

      
      <div className={" sm:flex justify-between items-center gap-20 sm:p-11 transition-all duration-1000 overflow-hidden"}>

        <div className={' gap-0 sm:w-1/2 mx-auto pb-16 '+ style.btnDiv}>

        {products.map((p,index)=>(
           <div key={index} className={style.btn +' '+(product===p.nick?style.btnClick:style.btnUnclick)} data-aos="slide-right" data-aos-delay="100" data-aos-duration="1000" onClick={()=>{handleClick(p.nick)}} >
           <h1>{p.name}</h1>
        </div>
        ))}
        </div>

        {/* {products.map((product,index)=>(
           
        ))} */}



        <div className=' ' data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
          <div className={' items-center align-middle m-auto px-32 py-14 '+style.display} style={{alignContent:"center"}}>
            <Image className=' m-auto' src={selectedProduct.image} width={512.59} height={289.22} />
            <p className={style.infoTech}>{selectedProduct.detail.substring(0,78)+(selectedProduct.detail.length>78?'...':'')}</p>
            <Button  className={style.extBtn} text={"Learn more"} />
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Products