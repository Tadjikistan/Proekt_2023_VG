import React, { FC } from 'react'
import Image from 'next/image'
import coin from './../assets/Coin.svg'

type card = {
    iconImg: any
    role: string
    price: number
}

const Card:FC<card> = ({iconImg, role, price}) => {
  return (
    <>
        <div className='bg-[#252627] rounded-[20px] py-7 text-white flex flex-col items-center w-full max-w-[300px] cursor-pointer card'>
          <Image src={iconImg} alt={'icon'} />
          <h3 className='text-4xl mt-5 mb-6'>{role}</h3>
          <div className='flex justify-center text-2xl gap-1'>
            {price}<Image src={coin} alt={'coin-icon'} />
          </div>
        </div>
    </>
  )
}

export default Card