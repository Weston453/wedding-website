import React from 'react'
import NavBar from '../../NavBar/NavBar'
import classes from './DessertSnacks.module.css'

const DessertSnacks = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.CocktailsTitle}>Dessert + Snacks</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2>
              Dessert
            </h2>
            <h3 className={classes.SubMenuH3}>Wedding Cake</h3>
            <p className={classes.SubMenuP}>almond cake, almond buttercream, raspberry jam</p>
            <h3 className={classes.SubMenuH3}>Dessert Bar</h3>
            <p className={classes.SubMenuP}>brownies, hand pies (berry/apple), macarons (vanilla/raspberry)</p>
          </div>
          <hr></hr>
          <div className={classes.SubMenuLastDiv}>
            <h2>
              Late Night Snacks
            </h2>
            <h4>After 9pm</h4>
            <h3 className={classes.SubMenuH3}>Local Angus Beef Sliders</h3>
            <p className={classes.SubMenuP}>do you really care what’s in it at this point?</p>
            <h3 className={classes.SubMenuH3}>Cheese Quesadilla</h3>
            <p className={classes.SubMenuP}>tortilla, cheese, obvi…</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DessertSnacks