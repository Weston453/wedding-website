import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './EventList.module.css'
import Rings from '../images/rings.svg'
import CocktailHour from '../images/cocktail-hour.svg'
import Dinner from '../images/dinner.svg'
import Speeches from '../images/speeches.svg'
import FirstDance from '../images/first-dance.svg'
import CakeCutting from '../images/cake-cutting.svg'
import Snacks from '../images/snacks.svg'
import LastDance from '../images/last-dance.svg'

const EventList = () => {
  return (
    <div>
    <NavBar />
    <div className="Container">
      <h1 className={classes.EventsTitle}>Order of Events</h1>
      <main>
        <table>
          <tr>
            <td className={classes.EventItem}>Ceremony</td>
            <td>3 : 30 PM</td>
            <td className={classes.image}>
              <img src={Rings} alt="Rings" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Cocktail Hour</td>
            <td>4 : 00 PM</td>
            <td className={classes.image}>
              <img src={CocktailHour} alt="CocktailHour" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Dinner</td>
            <td>5 : 30 PM</td>
            <td className={classes.image}>
              <img src={Dinner} alt="Dinner" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Speeches</td>
            <td>6 : 00 PM</td>
            <td className={classes.image}>
              <img src={Speeches} alt="Speeches" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>First Dance</td>
            <td>7 : 00 PM</td>
            <td className={classes.image}>
              <img src={FirstDance} alt="First Dance" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Cake Cutting</td>
            <td>7 : 45 PM</td>
            <td className={classes.image}>
              <img src={CakeCutting} alt="Cake Cutting" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Late Night Snacks</td>
            <td>9 : 00 PM</td>
            <td className={classes.image}>
              <img src={Snacks} alt="Snacks" />
            </td>
          </tr>
          <tr>
            <td className={classes.EventItem}>Last Dance</td>
            <td>9 : 55 PM</td>
            <td className={classes.image}>
              <img src={LastDance} alt="Last Dance" />
            </td>
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