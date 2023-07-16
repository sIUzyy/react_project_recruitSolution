import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button 
    onClick={onClick} 
    className='bg-[#673657] text-white font-title p-3 rounded-md'>

    {children}
    
    </button>
  )
}

export default Button