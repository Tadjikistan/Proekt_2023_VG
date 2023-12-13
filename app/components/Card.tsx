import React, { FC } from 'react'
import Image from 'next/image'
import coin from './../assets/Coin.svg'

type card = {
    iconImg: any
    role: string
    price: number
    modalF: any
}

const Card:FC<card> = ({iconImg, role, price, modalF}) => {
  return (
    <>
        <div onClick={modalF} className='bg-[#252627] rounded-[20px] py-7 text-white flex flex-col items-center w-full max-w-[300px] cursor-pointer card'>
          <Image src={iconImg} alt={'icon'} className=' 2xl:w-32 2xl:h-32  w-24 h-24' />
          <h3 className='2xl:text-4xl md:text-3xl mt-5 mb-6'>{role}</h3>
          <div className='flex justify-center 2xl:text-2xl md:text-xl gap-1'>
            {price}<Image src={coin} alt={'coin-icon'} />
          </div>
        </div>
    </>
  )
}

export default Card