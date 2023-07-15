import React from 'react';
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

export default function Header() {
  return (
   <header>
    <div className="container header__container">
     <h5>Hello I'm</h5>
     <h1>Bablu Kumar</h1>
     <h5 className='text-light'>Front-End Developer</h5>
     <CTA/>
     <HeaderSocial/>
     <div className="me">
      <img src={ME} alt='IMG'/>
     </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   
   </header>
  )
}
