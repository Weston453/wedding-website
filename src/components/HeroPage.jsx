import React from 'react'
import NavBar from './NavBar/NavBar'

const HeroPage = () => {
  return (
    <div>
      <NavBar />
      <div className='Container'>
          <h1>Welcome to</h1>
          <h1>Korie and Weston's</h1> 
          <h1>Wedding</h1>
          <a href="/Welcome"><button>Join us</button></a>
      </div>
    </div>
  )
}

export default HeroPage