import React from 'react'
import './Sec1.css'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { motion } from 'framer-motion';

const Sec1 = () => {

  const divVariants = {
    hover: {
      scale: 1.3,
    }
  }

  return (
    <motion.div variants={divVariants} whileHover="hover" >
      <div className='div'>
      <div className='container'>
        <div className='left' >
          <div className='left-up'>
            <DesktopWindowsOutlinedIcon fontSize='large' className='left-1' />
          </div>
          <div className='left-do'>
            <h3>
              Lorem Ipsum Dolor Sit Amet
            </h3>
          </div>
        </div>

        <div className='center'>
          <div className='center-up'>
            <LayersIcon fontSize='large' className='center-2' />
          </div>
          <div className='center-do'>
            <h3>
              Lorem Ipsum Dolor Sit Amet
            </h3>
          </div>
        </div>

        <div className='right'>
          <div className='right-up'>
            <CheckCircleOutlineOutlinedIcon fontSize='large' className='right-3' />
          </div>
          <div className='right-do'>
            <h3>
              Lorem Ipsum Dolor Sit Amet
            </h3>
          </div>
        </div>
        </div>
        </div>
      </motion.div>
  )
}

export default Sec1