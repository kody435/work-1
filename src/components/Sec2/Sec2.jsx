import React from 'react'
import './Sec2.css'
import img2 from "../../assets/Robotic-arms.jpg";
import img3 from '../../assets/parker-bu.jpg'
import img4 from '../../assets/Industrial-Robot.jpg'

const Sec2 = () => {
  return (
      <div>
          <div className='grid grid-cols-2 mt-10'>
                <div className='justify-start bg-gray-500 h-100 w-50'>
                    <img alt="" className='img2' src={ img2 }/>
                </div>
                <div className='div-12'>
                  <h2 className='h2'>Lorem Ipsum dolor amet sit</h2>
                  <h5 className='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                
                <div className='div-12'>
                  <h2 className='h2'>Lorem Ipsum dolor amet sit</h2>
                  <h5 className='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className='justify-start bg-gray-500 h-100 w-50'>
                    <img alt="" className='img2' src={ img3 }/>
                </div>
            </div>
            <div className='grid grid-cols-2  mb-40'>
                <div className='justify-start bg-gray-500 h-100 w-50'>
                    <img alt="" className='img2' src={ img4 }/>
                </div>
                <div className='div-12'>
                  <h2 className='h2'>Lorem Ipsum dolor amet sit</h2>
                  <h5 className='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
            </div>
    </div>
  )
}

export default Sec2