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
            <img className={classes.eventImage} 
            src={Rings} alt="Rings" 
            />
            <h3>Ceremony &ensp;-&ensp; 3 : 30 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={CocktailHour} alt="CocktailHour" 
            />
            <h3>Cocktails &ensp;-&ensp; 4 : 00 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={Dinner} alt="Dinner" 
            />
            <h3>Dinner &ensp;-&ensp; 6 : 00 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={Speeches} alt="Speeches" 
            />
            <h3>Speeches &ensp;-&ensp; 7 : 00 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={FirstDance} alt="First Dance" 
            />
            <h3>First Dance &ensp;-&ensp; 7 : 25 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={CakeCutting} alt="Cake Cutting" 
            />
            <h3>Cake &ensp;-&ensp; 8 : 00 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={Snacks} alt="Snacks" 
            />
            <h3>Snacks &ensp;-&ensp; 9 : 00 PM</h3>
          </section>
          <section>
            <img className={classes.eventImage} 
            src={LastDance} alt="Last Dance" 
            />
            <h3>Last Dance &ensp;-&ensp; 9 : 55 PM</h3>
          </section>
        </main>
        <footer className={classes.footer}>
          <h3 className={classes.footerText}>
            Thank you for joining us!
          </h3>
          <h3>
            Korie + Weston
          </h3>
          <h3 className={classes.footerTextL}>
            05 . 29 . 22
          </h3>
        </footer>
      </div>
    </div>
  )
}

export default EventList