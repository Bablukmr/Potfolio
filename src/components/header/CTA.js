import React from 'react'
import CV from '../../assets/Resume_My.pdf'

export default function CTA() {
  return (
    <div className='cta'>
<a href={CV} target="blank" className='btn'>Resume</a>
<a href='#contact' className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}
