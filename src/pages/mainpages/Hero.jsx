import React from 'react'
import landingImage from '../../assets/main-img.webp'
import Button from '../../components/button/Btn'

const Hero = () => {
  return (

    <div id='home' className='bg-[#F7F4F6]'>
        <div className='max-w-7xl mx-auto '>

            <div className='m-3 py-24 md:flex md:justify-between md:items-center '>

            <div className='md:w-[60%]'>

                <div className='py-5 md:py-0'>
                    <h1 className='font-title capitalize text-4xl text-center  md:text-left lg:text-5xl'>efficient and streamlined recruitment made easy</h1>
                </div>

                <div className='py-5 md:py-0'>
                    <p className='font-desc text-center md:text-left md:mt-5 '>Welcome to RecruitEase, the cutting-edge online recruitment solution that simplifies and optimizes the hiring process for hiring managers and HR professionals, 
                        empowering you to find the perfect candidates quickly and make data-driven hiring decisions.</p>
                </div>

                <div className='flex justify-center py-5 md:py-0 md:justify-start md:mt-5'>
                    <Button>View All Services</Button>
                </div>

            </div>

                <div className='py-5 md:py-0'>
                    <img src={landingImage} alt='' className='rounded-lg md:h-56 lg:h-72 ' />
                </div>
                    


            </div>


        </div>
    </div>
  )
}

export default Hero