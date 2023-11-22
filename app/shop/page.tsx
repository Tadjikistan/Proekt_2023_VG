import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Shop from '../components/Shop'

export default function page() {
  return (
    <>
        <Sidebar />
        <Header title='Магазин' />
        <Shop />
    </>
  )
}
