import Image from 'next/image'
import React, { FC } from 'react'
import coin from './../assets/Coin.svg'

type head = {
  title: string
}


const Header:FC<head> = ({title}) => {
  return (
    <>
        <header className='header bg-[#141414] px-8'>
            <div className='flex justify-between py-6 text-2xl font-semibold text-white'>
                <h2>{title}</h2>
                <div className='flex gap-2'>
                    <Image src={coin} alt={'coin-icon'} />
                    <p>400</p>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header