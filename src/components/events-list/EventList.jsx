import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './EventList.module.css'

const EventList = () => {
  return (
    <div>
    <NavBar />
    <div className="Container">
      <h1 className={classes.EventsTitle}>Order of Events</h1>
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
    </div>
    </div>
  )
}

export default EventList