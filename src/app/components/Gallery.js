import Image from 'next/image'
import testStyle from '../Styles/testimonial.module.css'
import style from '../Styles/gallery.module.css'
import React from 'react'

const Gallery = () => {

  const scrollTest = (direction)=>{
    document.querySelector("#gallScroll").scrollTo({left: direction==='left'?document.querySelector("#gallScroll").scrollLeft-400:document.querySelector("#gallScroll").scrollLeft+400,behavior:'smooth'})
  }

const gallery = 
[

  {
    image:'/Gallery1.png'
  },
  {
    image:'/introBanner.png'
  },
  {
    image:'/Gallery1.png'
  },

]

  return (
    <>
      <div className=' sm:flex flex-row-reverse justify-between gap-16 items-center'>


        <div className={' '+ style.gallText}>
          <div>
            <h1 className={style.header + ' text-standard sm:text-start text-center pb-10'}>Gallery</h1>
            <h1 className={style.subHeader + ' sm:text-start text-center pb-10'}>Where and who we've met</h1>
            <h1 className={style.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque, illum similique necessitatibus blanditiis tenetur voluptates, reprehenderit, modi nesciunt voluptas eligendi nihil saepe eos error eum? Facere eaque quibusdam perspiciatis vitae tempore nihil atque vel.</h1>
          </div>
          <div className='  sm:text-start text-center pt-12' >
            <i className={'ri-arrow-left-wide-fill cursor-pointer text-standard border-standard ' + style.arrow} onClick={() => { scrollTest('left') }} ></i>
            <i className={'ri-arrow-right-wide-fill cursor-pointer text-standard border-standard ' + style.arrow} onClick={() => { scrollTest('right') }}></i>
          </div>
        </div>



        <div className={' '+ style.image} style={{}}>
          <div className={' flex justify-between items-center '+ style.gallScroll} id='gallScroll' style={{overflowX:'scroll'}}>
          {
            gallery.map((pic)=>(
              <Image src={pic.image} width={2500} height={800} style={{scrollSnapAlign:'end'}}/>
            ))
          }
          </div>
        </div>

      </div>
    </>
  )
}

export default Gallery