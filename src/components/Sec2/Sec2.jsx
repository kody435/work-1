import React from 'react'
import './Sec2.css'
import img2 from "../../assets/Robotic-arms.jpg";
import img3 from '../../assets/parker-bu.jpg'
import img4 from '../../assets/Industrial-Robot.jpg'
import { motion } from 'framer-motion';

const Sec2 = () => {
  return (
    <motion.div cx={ 500 } >
          <div className='grid grid-cols-2 mt-10'>
                <div className='justify-start bg-gray-500 h-100 w-50'>
                    <img alt="" className='img2' src={ img2 }/>
                </div>
                <div className='div-12'>
                  <h2 className='h2'>NO Marketing, NO Sales</h2>
                  <h5 className='h5'>Sales are not possible without marketing. Even a nut seller at the corner of the street needs to look credible. His signage, gloves, and smell of his nuts are in his own ways techniques of marketing. </h5>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                
                <div className='div-12'>
                  <h2 className='h2'>Alignment leads to Perfection</h2>
                  <h5 className='h5'>Alignment is presented in a project when there is an aspect of consistency. This can be seen through using the same text, fonts, color, shapes and graphics. Alignment simply means lining up the creation to look more classy, more sharp and more perfect.</h5>
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
    </motion.div>
  )
}

export default Sec2