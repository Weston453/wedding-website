import React from 'react'
import { Link } from 'react-router-dom'

const WhosWho = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Who's Who</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>
            Groom's Side
          </h2>
          <div>
            icon
          </div>
          <h3>Mike and Cheryl Isheim</h3>
          <p>Weston's Parents</p>
          <h3>Dell Barnes</h3>
          <p>Best Man</p>
          <h3>Ray Reynolds</h3>
          <p>Groomsman</p>
          <h3>Lucas Broskey</h3>
          <p>Groomsman</p>
          <h3>Gabe Cohen</h3>
          <p>Groomsman</p>
          <h3>Emma Isheim</h3>
          <p>Bridesmaid</p>
        </div>
        <div>
          <h2>
            Bride's Side
          </h2>
          <div>
            icon
          </div>
          <h3>Ken and Kelly Bayne</h3>
          <p>Korie's Parents</p>
          <h3>Rachel Brenneman and Mark Bensen</h3>
          <p>Maid/Man of Honor</p>
          <h3>Neha Jwala</h3>
          <p>Bridesmaid</p>
          <h3>Cortney VanMilligen</h3>
          <p>Bridesmaid</p>
          <h3>Courtney Owings</h3>
          <p>Bridesmaid</p>
          <h3>Ella Isheim</h3>
          <p>Bridesmaid</p>
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

export default WhosWho