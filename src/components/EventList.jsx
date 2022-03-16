import React from 'react'
import { Link } from 'react-router-dom'

const EventList = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Order of Events</h1>
        <div>hamburger</div>
      </section>
      <main>
        <table>
          <tr>
            <td>Ceremony</td>
            <td>3 : 30 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Cocktail Hour</td>
            <td>4 : 00 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>5 : 30 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Speeches</td>
            <td>6 : 00 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>First Dance</td>
            <td>7 : 00 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Cake Cutting</td>
            <td>7 : 45 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Late Night Snacks</td>
            <td>9 : 00 PM</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Last Dance</td>
            <td>9 : 55 PM</td>
            <td>Icon</td>
          </tr>
        </table>
      </main>
      <footer>
        <h3>
          Thank you for joining us
        </h3>
        <h3>
          Korie + Weston
        </h3>
        <h3>
          05 .29. 22
        </h3>
      </footer>
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

export default EventList