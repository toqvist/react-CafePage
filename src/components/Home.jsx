import React from 'react'
import cafe from '../assets/cafe.jpg'

export default function Home() {
  return (
    <div>
      <div className="banner-wrapper bg-black">
        <h1 className="hero">Café Home</h1>
        <img src={cafe} alt="" className="backdrop"/>
      </div>
    </div>
  )
}
