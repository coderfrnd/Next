"use client"
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"


const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='w-60 h-72 bg-zinc-900/60 rounded-[40px] text-white px-8 py-10 overflow-hidden relative flex-shrink-0'>
<FaRegFileAlt />
 <p className='text-sm leading-tight mt-5'>{data.description}</p>
 <div className='footer absolute bottom-0 w-full   left-0'>
    <div className=' flex items-center justify-between px-8 mb-3 py-3'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 flex justify-center items-center rounded-full bg-zinc-600 '>
            <LuDownload  size=".9em" color='#fff'/>
        </span>

    </div>
      
   {data.coloure && ( <div className={`w-full p-3 ${data.colours=="blue" ? "bg-cyan-500":"bg-green-600"} flex justify-center items-center`}>
  <h3 className=' text-sm text-black'>Download</h3>
    </div> )}
        
    
   

 </div>
    </motion.div>
  )
}

export default Card