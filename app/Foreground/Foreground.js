"use client"
import React, { useRef } from 'react'
import Card from '../Card/Card'
import { motion } from "framer-motion"

const Foreground = () => {

    const ref = useRef(null)

     const data= [{
        description:"Lorem ipsum dolor sit amet consectetur khdkwhdoihd jkbukbdqwdbjbjkbdwuguw kjbsakbdwd",
        filesize:"6",
        coloure:true,
        colours:"green"

     },
     {
        description:"Lorem ipsum dolor sit amet consectetur  probability is the field where",
        filesize:"6",
        coloure:false,
        // colours:"black"

     },
     {
        description:"Lorem ipsum dolor sit amet consectetur web dev is not more secure",
        filesize:"6",
        coloure:true,
        colours:"blue"

     }]
  return (
    <div ref={ref} className='w-full h-full  fixed z-[3] top-0 left-0 flex p-2 gap-6 flex-wrap'>

        {data.map((item,index)=>(
            <Card data={item} reference={ref} />)
        )}

    </div>
  )
}

export default Foreground