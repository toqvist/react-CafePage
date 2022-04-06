import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
