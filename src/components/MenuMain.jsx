import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const MenuMain = () => {
  return (
    <div>
      <NavBar />
      <div className="Container">
        <section>
          <h1>Menu</h1>
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
      </div>
    </div>
  )
}

export default MenuMain