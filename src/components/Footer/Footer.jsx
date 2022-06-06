import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='h-auto w-100 text-white bg-black flex text-center justify-center pt-14 pb-14 flex-col'>
      
              <div className='pb-4 space-x-10 cursor-pointer'>
                  <FacebookOutlinedIcon fontSize='large' />
                  <TwitterIcon fontSize='large' />
                  <InstagramIcon fontSize='large' />
              </div>
              <div className='pt-4 text-2xl'>
                  <h1>© RADHE 2022. All Rights Reserved.</h1>
              </div>
    </div>
  )
}

export default Footer