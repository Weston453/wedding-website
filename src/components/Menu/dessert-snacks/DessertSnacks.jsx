import React from 'react'
import classes from './DessertSnacks.module.css'
import MenuNavBar from '../../NavBar/menu-nav/MenuNavBar'

const DessertSnacks = () => {
  return (
    <div>
      <div className='bg'></div>
      <MenuNavBar />
      <div className="Container">
        <h1 className={classes.CocktailsTitle}>D + S</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2 className={classes.dessert}>Dessert</h2>
            <h3 className={classes.SubMenuH3}>Wedding Cake</h3>
            <p className={classes.SubMenuP}>almond cake, almond buttercream, raspberry jam</p>
            <h3 className={classes.SubMenuH3}>Dessert Bar</h3>
            <p className={classes.SubMenuPLast}>brownies, hand pies (berry/apple), macarons (vanilla/raspberry)</p>
          </div>
          <hr></hr>
          <div>
            <h2  className={classes.snacks}>Late Night Snacks</h2>
            <h3 className={classes.afterHoursFun}> - after 9pm - </h3>
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