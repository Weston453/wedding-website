import React from 'react'
import { Link } from 'react-router-dom'

const MenuMain = () => {
  return (
    <div className="hero-container">
      <Link to="/Welcome">Welcome</Link>
        <Link to="/EventList">EventList</Link>
        <Link to="/MenuMain">MenuMain</Link>
        <Link to="/CoctailHour">CoctailHour</Link>
        <Link to="/OpenBar">OpenBar</Link>
        <Link to="/Dinner">Dinner</Link>
        <Link to="/DessertSnacks">DessertSnacks</Link>
        <Link to="/WhosWho">WhosWho</Link>
        <Link to="/Seating">Welcome</Link>
      MenuMain<br/>
      <Link to="/CoctailHour">CoctailHour</Link>
      <Link to="/OpenBar">OpenBar</Link>
      <Link to="/Dinner">Dinner</Link>
      <Link to="/DessertSnacks">DessertSnacks</Link>
    </div>
  )
}

export default MenuMain