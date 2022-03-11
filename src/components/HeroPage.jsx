import React from 'react'
import { Link } from 'react-router-dom'
import './heroPage.css'

const HeroPage = () => {
  return (
    <div>
      {/* <img src="watercolor" alt="background" /> */}
      <section className='hero-container'>
        <div className='hero-content'>
          <h1>Welcome to Korie and Weston's Wedding</h1>
          <button>Join us</button>
        </div>
        <Link to="/Welcome">Welcome</Link>
        <Link to="/EventList">EventList</Link>
        <Link to="/MenuMain">MenuMain</Link>
        <Link to="/CoctailHour">CoctailHour</Link>
        <Link to="/OpenBar">OpenBar</Link>
        <Link to="/Dinner">Dinner</Link>
        <Link to="/DessertSnacks">DessertSnacks</Link>
        <Link to="/WhosWho">WhosWho</Link>
        <Link to="/Seating">Welcome</Link>
      </section>
    </div>
  )
}

export default HeroPage