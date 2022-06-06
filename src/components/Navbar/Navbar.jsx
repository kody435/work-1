import React from 'react'
import './Navbar.css'
import Logo from '../../assets/SubLogo.svg'

const Header = () => {

  return (
    <div className='main'>
      <div className="header">
        <div className='div1'>
          <img src={Logo} alt='' className='w-40' />
          <h1 className='text-center text-white flex justify-center items-center text-xl'>Radhe Enterprise</h1>
        </div>
        
        <div className="header-right">
          <a href="/">Inquiry</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  )
}

export default Header