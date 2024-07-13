'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

function Faq({element}) {
    const [toggle, setToggle]= useState(false);
  return (
    <>
        <div className='space-y-2 bg-white text-black rounded-[1.3rem] px-5 py-3 cursor-pointer'
            onClick={()=>{
                setToggle(!toggle);
            }}
        >
            <div className='text-lg flex items-center justify-between' >
                <span>{element.ques}</span>
                <span><IoMdArrowDropdown style={toggle ? {
                    "rotate": "180deg",    
                }:{}
            }/></span>
            </div>
            {
                toggle && 
                <>
                    <hr />
                    <div className='text-sm'>
                        {element.ans}
                    </div>
                </>
            }
        </div>
    </>
  )
}

export default Faq
