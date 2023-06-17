import React from 'react';
import { AiFillGithub,AiFillLinkedin,AiOutlineFacebook } from "react-icons/ai";

export default function HeaderSocial() {
  return (
    <div className='header__soial'>
      <a href='https://github.com/Bablukmr' target='blank'><AiFillGithub/></a>
      <a href='https://www.linkedin.com/in/bablukmr/' target='blank'><AiFillLinkedin/></a>
      <a href='https://www.facebook.com/Bablukmr01' target='blank'><AiOutlineFacebook/></a>
      
    </div>
  )
}
