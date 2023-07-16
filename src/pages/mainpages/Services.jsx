const content = [
    {
        id: 1,
        title: 'Efficient Candidate Sourcing Made Simple',
        description: 'Our Advanced Candidate Search service provides comprehensive and tailored search solutions to help you find the perfect candidate for your organization needs',
        path: '/',
        imgsrc: imageOne,
    },

    {
        id: 2,
        title: 'Effortless Talent Acquisition and Collaboration',
        description: 'Our Seamless Collaboration and Communication service allows teams to easily work together, share information, and communicate effectively.',
        path: '/',
        imgsrc: imageTwo,
    },

    {
        id: 3,
        title: 'Effortless Candidate Evaluation with RecruitEase',
        description: 'Our Automated Resume Screening service efficiently filters and analyzes resumes, saving you time and helping you find the best candidates.',
        path: '/',
        imgsrc: imageThree,
    },
]

import React from 'react'
import { Link } from 'react-router-dom'
import imageOne from '../../assets/service-img-one.webp'
import imageTwo from '../../assets/service-img-two.webp'
import imageThree from '../../assets/service-img-three.webp'


const Services = () => {
  return (
    <div id='service' className='bg-[#F7F4F6]'>
     <div className='max-w-7xl mx-auto '>

        <div className='m-3 py-24 '>

            <div className='py-5'>
                <h1 className='text-center font-title text-4xl '>Our Services</h1>
            </div>

            <div className='grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
                {content.map((media) => (
                    <div className='py-5' key={media.id}>
                        <img src={media.imgsrc} alt=''/>

                        <h1 className='font-title text-2xl py-4'>{media.title}</h1>
                        <p className='font-desc pb-4 text-[#7E8D85]'>{media.description}</p>

                        <Link className='py-4 font-desc text-[#673657]' to={media.path}>Read More</Link>                    
                    </div>
                ))}

            </div>
            
        </div>
        </div>
    </div>
    )
}

export default Services