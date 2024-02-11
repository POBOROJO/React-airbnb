import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Body from './components/Body.jsx'

function App() {

  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Body></Body>
    </div>
  )
}

export default App
