import React, { createElement, useState } from 'react'
import {HiMenuAlt2} from 'react-icons/hi'
import { content } from '../Content'
const NavBar = () => {
  const [active,setActive]=useState(0)
  const [show, setShow]=useState(false)
  const {nav}=content
  return (
    <div className='w-full flex justify-center'>
      <div className='sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2' onClick={()=>setShow(!show)}>
        <HiMenuAlt2 size={34} /> 
      </div>
     
      <nav className={`fixed bottom-10 z-[999] flex items-center gap-5 bg-slate-200/60 py-3 px-6 backdrop-blur-md rounded-full text-dark_primary duration-300 ${show?'bottom-10':'bottom-[100%]'}`}>
     
        


  {
          nav.map((items,i)=>(
            <a href={items.link}
            onClick={()=>setActive(i)}  className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${i===active && 'bg-dark_primary text-white '}`} >{createElement(items.icon)}</a>
          ))
        }

      </nav>
    </div>
  )
}

export default NavBar
