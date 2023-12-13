import Image from 'next/image'
import React, { FC } from 'react'
import star from '../assets/Star-icon.svg'
type modal = {
setActive: any
title: string

}

const Modal:FC<modal> = ({setActive, title}) => {
    return (
    <>
        <div onClick={()=> setActive(false)} className='overlay'></div>
        <div className='modal'>
            <div className='gif-modal'>
                1
            </div>
            <div className='flex flex-col items-center text-center text-2xl text-white'>
                <Image src={star} alt='icon' />
                <h3 className=' text-4xl'>{title}</h3>
                <p className='max-w-[315px] mt-12 mb-[60px]'>
                    Lorem ipsum dolor sit amet consectetur. Blandit tellus elementum suspendisse odio. Faucibus
                    penatibus
                    lobortis quis tempor eget libero sagittis orci est. Vulputate facilisi condimentum id bibendum.
                    Massa ornare
                </p>
                <button className="cssbuttons-io bg-gradient-to-r from-[#f7a430a4] to-[#f7a530]">
                    <span>Get role</span>
                </button>
            </div>
        </div>
    </>
    )
    }

    export default Modal