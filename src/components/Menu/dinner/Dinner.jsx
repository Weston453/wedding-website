import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import classes from './Dinner.module.css'

const Dinner = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.CocktailsTitle}>Dinner</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2>
              First Course
            </h2>
            <h3 className={classes.SubMenuH3}>West Shore Salad</h3>
            <p className={classes.SubMenuP}>baby mixed greens, cucumber, tomato, carrots, champagne dressing</p>
          </div>
          <div className={classes.SubMenuLastDiv}>
            <h2>
              Main Course
            </h2>
            <h3 className={classes.SubMenuH3}>Braised Beef Short Rib</h3>
            <p className={classes.SubMenuP}>roasted root vegetables, creamy truffled polenta, natural beef jus</p>
            <h3 className={classes.SubMenuH3}>Pacific Salmon Fillet</h3>
            <p className={classes.SubMenuP}>grilled asparagus, mediterranean lemon couscous, tomato basil broth</p>
            <h3 className={classes.SubMenuH3}>Grilled Vegetable Skewers</h3>
            <p className={classes.SubMenuP}>mediterranean lemon couscous, baby kale, balsamic glaze</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dinner