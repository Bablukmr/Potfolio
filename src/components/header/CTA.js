import React from 'react'
import CV from '../../assets/bkcv.pdf'

export default function CTA() {
  return (
    <div className='cta'>
<a href={CV} download className='btn'>DownLoad CV</a>
<a href='#contact' className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}
