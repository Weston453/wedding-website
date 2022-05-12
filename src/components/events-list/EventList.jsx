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
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.EventsTitle}>Order of Events</h1>
        <main className={classes.eventsMain}>
          <section>
            <img src={Rings} alt="Rings" />
            <h3>Ceremony 3 : 30 PM</h3>
          </section>
          <section>
            <img src={CocktailHour} alt="CocktailHour" />
            <h3>Cocktails 4 : 00 PM</h3>
          </section>
          <section>
            <img src={Dinner} alt="Dinner" />
            <h3>Dinner 6 : 00 PM</h3>
          </section>
          <section>
            <img src={Speeches} alt="Speeches" />
            <h3>Speeches 7 : 00 PM</h3>
          </section>
          <section>
            <img src={FirstDance} alt="First Dance" />
            <h3>First Dance 7 : 25 PM</h3>
          </section>
          <section>
            <img src={CakeCutting} alt="Cake Cutting" />
            <h3>Cake 8 : 00 PM</h3>
          </section>
          <section>
            <img src={Snacks} alt="Snacks" />
            <h3>Snacks 9 : 00 PM</h3>
          </section>
          <section>
            <img src={LastDance} alt="Last Dance" />
            <h3>Last Dance 9 : 55 PM</h3>
          </section>
        </main>
        <footer className={classes.footer}>
          <h3 className={classes.footerText}>
            Thank you for joining us!
          </h3>
          <h3 className={classes.footerText}>
            Korie + Weston
          </h3>
          <h3 className={classes.footerText}>
            05 .29. 22
          </h3>
        </footer>
      </div>
    </div>
  )
}

export default EventList