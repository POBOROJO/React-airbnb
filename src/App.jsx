import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Body from './components/Body.jsx'
import data from './data.js'

function App() {
  
  const cards = data.map((item)=> {
    return (
      <Body 
        key = {item.id}
        image = {item.coverImg}
        rating = {item.stats.rating}
        review = {item.stats.reviewCount}
        location = {item.location} 
        title = {item.title} 
        price = {item.price}
        openSpots={item.openSpots}>
      </Body>
    )
  })
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <section className='card-list'>
          {cards}
        </section>
    </div>
  )
}

export default App
