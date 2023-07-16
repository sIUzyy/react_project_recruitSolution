const technologies = [

    {
        id: 1,
        name: 'React', 
        icon: <FaReact size={30}/>
    },

    {
        id: 2,
        name: 'Tailwind', 
        icon: <SiTailwindcss size={30}/>
    },

    {
        id: 3,
        name: 'Firebase', 
        icon: <SiFirebase size={30}/>
    },

    {
        id: 4,
        name: 'Javascript', 
        icon: <DiJavascript1 size={30}/>
    },

    
]

import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'

const Technology = () => {
  return (
    <div id='technology' className='max-w-7xl mx-auto'>
        <div className='m-3 py-24'>
            <div>
                <h1 className='font-title text-4xl text-center '>Technologies</h1>
            </div>

           
                <div className='grid grid-cols-2 justify-items-center md:grid-cols-4 md:mt-5'>
                {technologies.map((tech) => (
                    <div key={tech.id} className='flex items-center py-5 text-[#A1A1AA]'>
                        <i>{tech.icon}</i>
                        <h1 className='font-title text-lg uppercase pl-2'>{tech.name}</h1> 
                    </div> 
                        ))}
                </div>
        

        </div>

    </div>
  )
}

export default Technology