import React from 'react'
import NavBar from '../../NavBar/NavBar'
import classes from './OpenBar.module.css'

const OpenBar = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1  className={classes.CocktailsTitle}>Open Bar</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2 className={classes.wine}>
              Wine
            </h2>
            <h3 className={classes.SubMenuH3}>Pinot Grigio</h3>
            <p className={classes.SubMenuP}>attems, italy</p>
            <h3 className={classes.SubMenuH3}>Chardonnay</h3>
            <p className={classes.SubMenuP}>davis bynum, california</p>
            <h3 className={classes.SubMenuH3}>Pinot Noir</h3>
            <p className={classes.SubMenuP}>stoller family estate, oregon</p>
            <h3 className={classes.SubMenuH3}>Cabernet</h3>
            <p className={classes.SubMenuP}>oberon, california</p>
            <h3 className={classes.SubMenuH3}>Brut Prestige</h3>
            <p className={classes.SubMenuPLast}>mumm napa, california</p>
          </div>
          <hr></hr>
          <div>
            <h2 className={classes.spirits}>
              Spirits
            </h2>
            <h3 className={classes.SubMenuH3}>Vodka</h3>
            <p className={classes.SubMenuP}>tito’s, ketel one</p>
            <h3 className={classes.SubMenuH3}>Rum</h3>
            <p className={classes.SubMenuP}>sailor jerry, goslings, captain morgan, myers dark, malibu</p>
            <h3 className={classes.SubMenuH3}>Tequila</h3>
            <p className={classes.SubMenuP}>frida kahlo blanco, corralejo reposado</p>
            <h3 className={classes.SubMenuH3}>Gin</h3>
            <p className={classes.SubMenuP}>beefeater, tanqueray, bombay sapphire</p>
            <h3 className={classes.SubMenuH3}>Whiskey</h3>
            <p className={classes.SubMenuP}>crown royal, jack daniels, jameson, makers mark, buffalo trace, fireball</p>
            <h3 className={classes.SubMenuH3}>Scotch</h3>
            <p className={classes.SubMenuPLast}>johnnie walker black, chivas regal, glenlivet 12</p>
          </div>
          <hr></hr>
          <div className={classes.SubMenuLastDiv}>
            <h2 className={classes.beer}>
              Beer
            </h2>
            <h3 className={classes.SubMenuH3}>TBD</h3>
            <h3 className={classes.SubMenuH3}>TBD</h3>
            <h3 className={classes.SubMenuH3}>TBD</h3>
            <h3 className={classes.SubMenuH3}>TBD</h3>
            <h3 className={classes.SubMenuH3}>TBD</h3>
            <h3 className={classes.SubMenuH3}>TBD</h3>
          </div>
        </main>
      </div>
    </div>
  )
}

export default OpenBar