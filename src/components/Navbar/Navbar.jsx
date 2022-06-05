import React from 'react'
import './Navbar.css'

const Header = () => {

  return (
    <div className='main'>
      <div className="header">
        <h1 href="/">RADHE EXPORTS</h1>
        <div className="float-right space-x-10">
          <a href="/">Inquiry</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  )
}

export default Header