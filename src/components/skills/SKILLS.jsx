import React from 'react'
import './SKILLS.css';
import HTML from '../../assets/html.png';
import CSS from '../../assets/cssb.png';
import JS from '../../assets/js_large.png';
import REACT from '../../assets/react.png';
import REDUX from '../../assets/Redux-removebg-preview.png';
import MUI from '../../assets/muilogo.png';
import CHAKRA from '../../assets/Chakra-removebg-preview.png';
import GITHUB from '../../assets/github_large.png';
import tailwind from '../../assets/tailwind.png';
import Native from '../../assets/natives.PNG';
import Next from '../../assets/next.png';
import MongoDB from '../../assets/MongoDB.jpg';

export default function SKILLS() {
  return (
    
    <section id='skills'>
      <br/>
      <h5>Get To Know</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <button><img src={HTML} alt='IMG' className='buttons__img' width='100px' height='100px'/><h2>HTML</h2> </button>
          <button><img src={CSS} alt='IMG' className='buttons__img' width='100' height='120'/><h2>CSS</h2> </button>
          <button><img src={JS} alt='IMG' className='buttons__img'/><h2>JS</h2> </button>
          <button><img src={REACT} alt='IMG' className='buttons__img'/><h2>REACT</h2> </button>
          <button><img src={Next} alt='IMG' className='buttons__img'/><h2>NEXT</h2> </button>
          <button><img src={REDUX} alt='IMG' className='buttons__img'/><h2>REDUX</h2> </button>
          <button><img src={MUI} alt='IMG' className='buttons__img'/><h2>Material UI</h2> </button>
          <button><img src={CHAKRA} alt='IMG' className='buttons__img'/><h2>CHAKRA UI</h2> </button>
          <button><img src={GITHUB} alt='IMG' className='buttons__img'/><h2>GITHUB</h2> </button>
          <button><img src={tailwind} alt='IMG' className='buttons__img'/><h2>Tailwind CSS</h2> </button>
          <button><img src={Native} alt='IMG' className='buttons__img' height='10' width='10'/><h2>React Native</h2> </button>
          <button><img src={MongoDB} alt='IMG' className='buttons__img' height='10' width='10'/><h2>MongoDB</h2> </button>
        </div>
      </div>
    </section>
  )
}
