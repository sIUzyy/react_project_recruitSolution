const nav = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Technology',
    path: 'technology',
  },
  {
    id: 3,
    name: 'Service',
    path: 'service',
  },


  {
    id: 5,
    name: 'Demo',
    path: 'recruitease',
  },
  
]

import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import {  Link  } from 'react-router-dom'

import { useState } from 'react'

const Navbar = () => {

  const [navv, setNavv] = useState(false)

  const handleNav = () => {
    setNavv(!navv)
  }

  return (
    <div id='navbar' className='max-w-7xl mx-auto '>

        <div className='m-3 flex justify-between items-center md:hidden'>

            <div>
                <Link  to='/' className='font-title'>RecruitEase</Link>
            </div>

            <div className='block md:hidden' onClick={handleNav} >
               {!navv ? <RxHamburgerMenu size={30}/> : <AiOutlineClose size={30}/> } 
            </div>

          

        </div>

        {/* mobile view */}
        <div className='flex justify-center items-center md:hidden'>

          <div className={!navv ? 'hidden' : 'bg-[#673657] text-white w-[80%] rounded-md mt-4  '}>
          <div className={!navv ? 'hidden' : ' grid justify-items-center gap-2 '}>
            {nav.map((navigation) => (
              <Link  key={navigation.id} to={navigation.path} className={!navv ? 'hidden' : 'font-title mx-2 hover:opacity-80 p-3'}> {navigation.name}</Link>
            ))}
          </div>

          </div>
        </div>

        {/* desktop view */}
        <div className='hidden m-3 md:flex md:justify-between md:items-center'>

          <div>
          <Link  to='/' className='font-title'>RecruitEase</Link>

          </div>

          <div>
            {nav.map((navigation) => (
              <Link  key={navigation.id} to={navigation.path} className='font-title mx-2 hover:text-[#673657]'> {navigation.name}</Link>
            ))}

          </div>

        </div>
        
        
    </div>
  )
}

export default Navbar