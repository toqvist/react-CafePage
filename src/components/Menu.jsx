import React from 'react'
import pastries from '../assets/pastries.jpg'

export default function Menu() {
  return (
    <div>
      <div className="banner-wrapper bg-black">
        <h1 className="hero">Menu</h1>
        <img src={pastries} alt="" className="backdrop"/>
      </div>
    </div>
  )
}
