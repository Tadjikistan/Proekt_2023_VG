import Image from 'next/image'
import React from 'react'
import adminImg from '../assets/Vector.png'
import coin from './../assets/Coin.svg'
import Card from './Card'

const Shop = () => {
  return (
    <>
      <main className='main bg-[#0d0d0d] h-screen grid grid-cols-3 grid-rows-2 place-items-center'>
        <Card iconImg={adminImg} role={'Locked threads'} price={1488} />
        <Card iconImg={adminImg} role={'Nitro gift'} price={1488} />
        <Card iconImg={adminImg} role={'Admin'} price={1488} />
        <Card iconImg={adminImg} role={'Custom role'} price={1488} />
        <Card iconImg={adminImg} role={'Music channels'} price={1488} />
        <Card iconImg={adminImg} role={'VIP status'} price={1488} />
      </main>
    </>
  )
}

export default Shop