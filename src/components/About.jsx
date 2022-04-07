import React from 'react'
import clock from '../assets/clock.jpg'

export default function Info() {
  return (
    <div>
      <div className="banner-wrapper bg-black">
        <h1 className="hero">Open Hours</h1>
        <img src={clock} alt="" className="backdrop"/>
      </div>
    </div>
  )
}
