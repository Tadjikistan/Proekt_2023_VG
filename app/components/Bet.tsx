import React, { FC } from 'react'

type betka = {
    num: number
    color: string
}

const Bet:FC<betka> = ({num, color}) => {
  return (
    <div className='px-2 py-2'>
        <div className='bg-[#353333] rounded-md'>
        <div className='px-[10px] py-5'>
            <div className={`rounded-[10px] text-2xl font-bold px-16 py-2.5 text-center text-black ${color}`}>{num}x</div>
        </div>
    </div>
    </div>
    
  )
}

export default Bet