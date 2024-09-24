import React from 'react'
import style from '../Styles/testimonial.module.css'
import Image from 'next/image'

const Testimonial = () => {


  const scrollTest = (direction)=>{
    document.querySelector("#testScroll").scrollTo({left: direction==='left'?document.querySelector("#testScroll").scrollLeft-400:document.querySelector("#testScroll").scrollLeft+400,behavior:'smooth'})
  }

  const testimonials = [
    {
      content:'As a content creator, efficiency is key. Their software has been a game-changer. The intuitive interface allows me to manage my content calendar seamlessly. The analytics tools provide invaluable insights into audience behavior, helping me optimize my content strategy. Their communication and networking features have connected me with potential collaborators, expanding my reach. This software has streamlined my workflow and boosted my productivity. I highly recommend it to anyone in the content creation industry.',
      customer:'Dera Samson',
      career: 'Content Creator',
      pic:'/dp6.jpg'
    },
    {
      content:'In the fast-paced fashion world, staying ahead of trends is crucial. Their software has revolutionized how I manage my designs and production process. The platform’s integration with industry standards has streamlined communication with manufacturers. The data analytics have helped me identify popular styles and optimize inventory. Their consultancy services provided invaluable guidance on digital marketing, expanding my customer base. This software has not only increased efficiency but also elevated my brand',
      customer:' Dexter Stitches',
      career: ' Fashion Designer',
      pic:'/dp4.jpg'
    },
    {
      content:'Running a retail store requires juggling numerous tasks. Their software has been a lifesaver. The inventory management system is incredibly user-friendly and accurate. The customer relationship management tools have helped me build stronger connections with my clients. Their ICT integration solutions have streamlined payment processing and reduced errors. The advisory services provided valuable insights into market trends, helping me make informed business decisions. This software has significantly improved my store’s operations and profitability.',
      customer:' Uba Chidalu',
      career: ' Retail Store Owner',
      pic:'/dp.png'
    },
    {
      content:'As a visual artist, I often get lost in the creative process. Their software has been a breath of fresh air. The project management tools help me organize my ideas and deadlines effectively. The collaboration features allow me to work seamlessly with clients and partners. Their communication and networking tools have connected me with potential patrons and galleries. The software’s intuitive interface has made it easy for me to showcase my portfolio. It’s more than just software; it’s a tool that empowers artists to focus on what they love.',
      customer:'Kid Vinci',
      career: 'Visual Artist',
      pic:'/dp5.jpg'
    }
  ]

  return (
    <>
      <div className=' my-14 sm:my-48' id='testimonials section'>
        <div className=' flex-col-reverse sm:flex-row gap-20 flex justify-between items-center'>
          <div className={' flex items-center justify-between overflow-x-scroll w-full sm:w-2/3 ' +style.testScroll} id='testScroll'>
           {
            testimonials.map((t,index)=>(
              <div key={index} className={style.commentBox + ' bg-standard'}>
              <i className={' ri-double-quotes-l '+style.quotes}></i>
              <h1 className={style.content}>{t.content.substring(0,182)+(t.content.length>182?'...':'')}</h1>
              <div className=' flex gap-9 items-center pt-11'>
                <Image src={t.pic} width={64} height={64} className=' rounded-full' style={{}}/>
                <div>
                  <h1 className={style.customer}> {t.customer}</h1>
                  <h1 className={style.career}>{t.career}</h1>
                </div>
              </div>
            </div>
            ))
           }
          </div>

          <div className=' sm:w-1/3 gap-6 flex-col flex text-center sm:text-start px-5 sm:pr-10  md:pr-20 '>
             <h1 className={style.header + ' text-standard sm:text-start text-center'}> Testimonials</h1>
             <h1 className={style.subHeader +' sm:text-start text-center'}>What Citizens say about us</h1>
             <h1 className={style.content}>We pride ourselves on delivering exceptional software solutions and services that empower businesses across various industries. But dont just take our words for it - hear directly from our satisfied clients. Here are a few testimonials from individuals who have experienced firsthand the transformative impact of our offerings. </h1>
             <div className='  sm:text-start text-center' >
              <i className={'ri-arrow-left-wide-fill cursor-pointer text-standard border-standard ' + style.arrow} onClick={()=>{ scrollTest('left')}} ></i>
              <i className={'ri-arrow-right-wide-fill cursor-pointer text-standard border-standard ' + style.arrow} onClick={()=>{ scrollTest('right')}}></i>
             </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Testimonial