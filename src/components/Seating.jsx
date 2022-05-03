import React from 'react'
import { Link } from 'react-router-dom'

const Seating = () => {
  return (
    <div className='Container'>
      <section>
        <h1>Seating Chart</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>
            Where am I sitting?
          </h2>
          <h3>
            Enter your last name below for your table  number
          </h3>
          <h3>
            Once you locate your table, please find your seat at the table (your name will be printed on a placecard in front of your seat)
          </h3>
        </div>
        <div>
          <input>Enter your last name here</input>
          <button>Find table</button>
        </div>
      </main>
      <Link to="/Welcome">Welcome</Link>
      <Link to="/EventList">EventList</Link>
      <Link to="/MenuMain">MenuMain</Link>
      <Link to="/CoctailHour">CoctailHour</Link>
      <Link to="/OpenBar">OpenBar</Link>
      <Link to="/Dinner">Dinner</Link>
      <Link to="/DessertSnacks">DessertSnacks</Link>
      <Link to="/WhosWho">WhosWho</Link>
      <Link to="/Seating">Seating</Link>
    </div>
  )
}

export default Seating