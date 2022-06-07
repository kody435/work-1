import React from 'react'
import img1 from "../../assets/shipping.jpg";
import './Header.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";

const Header = () => {
    return (
        <div>
            <div className='div1'>
                <ScrollContainer className='w-100 h-100'>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))} className='w-100 h-100'>
                            <span className='div1'>
                                <img alt="" className='img1' src={img1} />
                            </span>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>

                
            </div>
        </div>
  )
}

export default Header