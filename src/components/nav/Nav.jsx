import React, { useState } from 'react';
import './Nav.css'
import { AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage,AiOutlineFundProjectionScreen } from "react-icons/ai";


export default function Nav() {

  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='/#' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''} ><AiOutlineUser/></a>
      <a href='#skills' onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'? 'active': ''}><AiOutlineBook/></a>
      <a href='#Portfolio' onClick={()=>setActiveNav('#Portfolio')} className={activeNav==='#Portfolio'? 'active': ''} ><AiOutlineFundProjectionScreen/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''} ><AiOutlineMessage/></a>
    </nav>
  )
}
