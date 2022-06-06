import React from 'react'
import img1 from "../../assets/shipping.jpg";
import './Header.css'
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div>
            <div className='div1'>
                <motion.img
                    
                alt="" className='img1' src={img1} />
            </div>
        </div>
  )
}

export default Header