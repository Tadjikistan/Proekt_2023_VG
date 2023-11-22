import React from 'react'
import Bet from './Bet'

const Main = () => {
  return (
    <>
        <main className='main bg-[#0D0D0D] '>
            <div className='flex justify-between main__block h-screen'>
              <div className=' min-w-[444px]'>
                1
              </div>
              <div><Bet num={2} color='bg-[#fff]'/></div>
              <div><Bet num={3} color='bg-[#c51951]'/></div>
              <div><Bet num={5} color='bg-[#3bcc92]'/></div>
              <div><Bet num={10} color='bg-[#f39b3b]'/></div>
            </div>
        </main>
    </>
  )
}

export default Main