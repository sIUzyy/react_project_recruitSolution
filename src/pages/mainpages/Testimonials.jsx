const statement = [ 
  {
    id: 1,
    name: 'Amanda Thompson',
    words: 'Recruitease revolutionized the hiring process with its intuitive interface and powerful features, saving time and identifying top talent. Highly recommended for businesses seeking streamline hiring.',
  },
  {
    id: 2,
    name: 'Jonathan Rodriguez',
    words: 'Recruitease revolutionized employee recruitment with advanced search capabilities and customizable templates, allowing for a wider pool of qualified candidates and finding the perfect fit for the team.',
  },
  {
    id: 3,
    name: 'Sophia Patel',
    words: 'Recruitease simplifies small businesses recruitment process by simplifying the hiring process, allowing professional job postings, applicant management, and collaborative features for team review and candidate selection.',
  },
]

import React from 'react'

const Testimonials = () => {
  return (
    <div className='max-w-7xl mx-auto'>
    <div className='m-3 py-24'>

        <div>
            <h1 className='font-title text-4xl text-center '>Trusted by numerous Hiring professionals</h1>
        </div>

        <div className='grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {statement.map((fb) => (

          <div key={fb.id} className='my-4 text-center  p-3 rounded-md shadow-md md:shadow-[#BFB5AF]'>
            <div className='mb-2'>
              <p className='font-desc text-[#7E8D85]'>"{fb.words}"</p>
            </div>

            <div>
              <h1 className='font-title text-[#D36135]'>{fb.name}</h1>
            </div>
          </div>
          ))}

        </div>
        </div>
    </div>
  )
}

export default Testimonials