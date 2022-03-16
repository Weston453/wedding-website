import React from 'react'
import { Link } from 'react-router-dom'

const MenuMain = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Menu</h1>
        <div>hamburger</div>
      </section>
      <br/>
      <h1>
        <Link to="/CoctailHour">CoctailHour</Link>
      </h1>
      <h1>
        <Link to="/OpenBar">OpenBar</Link>
      </h1>
      <h1>
        <Link to="/Dinner">Dinner</Link>
      </h1>
      <h1>
        <Link to="/DessertSnacks">DessertSnacks</Link>
      </h1>

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

export default MenuMain