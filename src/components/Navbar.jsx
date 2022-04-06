import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <nav>
      <ul className='nav-links'>
        <Link to= '/'>
          <li> Home </li>
        </Link>
        <Link to= '/about'>
          <li> About</li>
        </Link>
        <Link to= '/menu'>
          <li> Menu </li>
        </Link>
      </ul>
    </nav>
  )
}
