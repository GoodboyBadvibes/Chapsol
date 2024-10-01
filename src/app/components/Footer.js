import React from 'react'
import Button from "./Button";
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' px-5 sm:' style={{backgroundColor:'hsla(210, 3%, 75%, 0.221)', color:'black',}}>

      <div className=' pt-24 md:flex justify-around  m-auto text-center md:text-start'>
        <div>
          <div style={{ width: '180px' }} className='m-auto pb-20 md:pb-0 md:m-0 '>
            <Image src={'/logo.png'} width={180} height={200} className=' items-center m-auto md:m-0 md:items-start' />
            <h2 className='text-2xl pt-11 hidden md:block'>Create your Own website and collaborate with the team</h2>

          </div>

          <p className=' pt-24 sm:pb-0 text-lg hidden md:block'>  {/* only available in lg screens  */}
           @ 2023 UGC. All rights reserved. 
        </p>


        </div>
        
          
        
        <div className=' '>
          <Link href={'/'} className=' text-xl sm:text-2xl pb-9' ><h2>Home</h2></Link> <br />

          <Link href={'/'} className='text-xl sm:text-2xl pb-9' ><h2>About Us</h2></Link> <br />

          <Link href={'/'} className='text-xl sm:text-2xl pb-9' ><h2>Features</h2></Link> <br />

          <Link href={'/'} className='text-xl sm:text-2xl pb-9' ><h2>Pricing</h2></Link> <br />

          <div style={{position:' absolute'}} className=' sm:justify-start justify-around overflow-hidden text-center gap-6 sm:gap-24 pt-20 sm:pb-0 text-lg hidden md:flex'>  {/* only available in lg screens  */}
        <p>
          Privacy Policy 
        </p>
        <p>
         Terms of Service
        </p>
        <p>
          Cookies Settings
        </p>
        </div>

        </div>

        <div className=' '>
          <Link href={'/'} ><h2 className='text-xl sm:text-2xl pb-9'>Get Started</h2></Link> <br />

          <Link href={'/'} ><h2 className='text-xl sm:text-2xl pb-9'>F.A.Q s</h2></Link> <br />

        </div>

        <div className=' text-center'>
          <h3 className='text-xl sm:text-2xl pb-9 '>Socials</h3>

         <div className='flex gap-3 justify-center items-center'>
         <Link href={'/'} ><i className='ri-facebook-fill text-4xl rounded-full p-3 text-standard' style={{backgroundColor:'hsla(210, 3%, 75%, 0.518)'}}></i></Link> 

         <Link href={'/'} ><i className='ri-twitter-x-fill text-4xl rounded-full p-3 text-standard' style={{backgroundColor:'hsla(210, 3%, 75%, 0.518)'}}> </i></Link> 

         <Link href={'/'} ><i className='ri-youtube-fill text-4xl rounded-full p-3 text-standard' style={{backgroundColor:'hsla(210, 3%, 75%, 0.518)'}}> </i></Link> 

         <Link href={'/'} ><i className='ri-linkedin-fill text-4xl rounded-full p-3 text-standard' style={{backgroundColor:'hsla(210, 3%, 75%, 0.518)'}}> </i></Link> 

         </div>

        </div>

      </div>

      <div className=' sm:flex justify-start items-center gap-40 text-lg pt-14 pb-28 m-auto'>  {/* only available in md & sm screens  */}
        <p className='pb-12 sm:pb-0 text-center m-auto block md:hidden'>
           @ 2023 UGC. All rights reserved. 
        </p>
        
        <div className='flex sm:justify-start justify-around overflow-hidden text-center gap-6 sm:gap-24  md:hidden'>
        <p>
          Privacy Policy 
        </p>
        <p>
         Terms of Service
        </p>
        <p>
          Cookies Settings
        </p>
        </div>
        
      </div>
      </div>


  )
}

export default Footer