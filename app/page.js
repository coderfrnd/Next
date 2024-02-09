import Navbar from '@/Navbar/Navbar'
import React from 'react'
import Foreground from './Foreground/Foreground'
// import Card from './Card/Card'

const page = () => {
  return (
    <>
  
    <div className=' relative w-full h-screen bg-zinc-800'>
    <Navbar/>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-300 leading-none tracking-tighter text-[10vw]'>DOCS</h1>
    <Foreground/>
  
    </div>
    </>
  )
}

export default page