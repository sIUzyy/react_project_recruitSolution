const icons = [
    {
        id: 1,
        icon: <AiOutlineGithub size={25}/>
    },
    {
        id: 2,
        icon: <AiOutlineInstagram size={25}/>
    },
    {
        id: 3,
        icon: <AiOutlineLinkedin size={25}/>
    },
]

import React, { useState } from 'react'
import Button from '../button/Btn'
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {

    const [year] = useState(new Date().getFullYear())     

  return (
    <div id='contact' className='bg-[#F7F4F6]'>
        <div className='max-w-7xl mx-auto '>

            <div className='m-3 py-24 '>

                <div>

                    <div className='py-5 text-center'>
                        <h1 className='text-2xl font-title '>Subscribe to Newsletter</h1>
                        <p className='font-desc pt-2 text-[#7E8D85]'>Enter your email address to register to our newsletter subscription</p>
                    </div>

                    <form >
                    <div className='w-full mx-auto md:flex md:justify-center'>
                        <input className='border  p-2 rounded-md w-full font-title outline-none md:w-[70%] lg:w-[60%] xl:w-[50%] ' placeholder='Email Address'/>
                    </div>
                    <div className='flex justify-center py-5'>
                        <Button >Subscribe</Button>
                    </div>
                    </form>
                </div>

                <div className='flex items-center justify-center py-14'>
                {icons.map((i) => (
                    <i key={i.id} className='text-[#A1A1AA] px-1'>{i.icon}</i>
                    ))}

               
                </div>

                <div className='text-center  font-title text-[#A1A1AA]'> <h1>© {year} RecruitEase. All rights reserved.</h1></div>

      </div>
    </div>
</div>
  )
}

export default Footer