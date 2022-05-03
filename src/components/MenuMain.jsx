import React from 'react'
import { Link } from 'react-router-dom'

const MenuMain = () => {
  return (
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
  )
}

export default MenuMain