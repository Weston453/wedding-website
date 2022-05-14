import React from 'react'
// import NavBar from '../../NavBar/NavBar'
import classes from './OpenBar.module.css'
import MenuNavBar from '../../NavBar/menu-nav/MenuNavBar'

const OpenBar = () => {
  return (
    <div>
      <div className='bg'></div>
      <MenuNavBar />
      <div className="Container">
        <h1  className={classes.CocktailsTitle}>Open Bar</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2 className={classes.wine}>
              Wine
            </h2>
            <h3 className={classes.SubMenuH3}>Pinot Grigio</h3>
            <p className={classes.SubMenuP}>santa margarita, italy</p>
            <h3 className={classes.SubMenuH3}>Chardonnay</h3>
            <p className={classes.SubMenuP}>sonoma-cutrer russian river ranches, california</p>
            <h3 className={classes.SubMenuH3}>Pinot Noir</h3>
            <p className={classes.SubMenuP}>meiomi, california</p>
            <h3 className={classes.SubMenuH3}>Cabernet</h3>
            <p className={classes.SubMenuP}>oberon, california</p>
            <h3 className={classes.SubMenuH3}>Brut Prosecco</h3>
            <p className={classes.SubMenuPLast}>adami garbel, italy</p>
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
            <h3 className={classes.SubMenuH3}>On Draft</h3>
            <p className={classes.SubMenuBeerP}>fall river - numb numb juicy hazy IPA</p>
            <p className={classes.SubMenuBeerP}>elysian - space dust IPA</p>
            <p className={classes.SubMenuBeerP}>alibi ale works - pale ale</p>
            <p className={classes.SubMenuBeerP}>fiftyfifty - tahoe pilzner</p>
            <p className={classes.SubMenuBeerP}>the brewer's cabinet - tahoe blonde</p>
            <p className={classes.SubMenuBeerPLast}>21st amendment - homeward bound</p>
            <h3 className={classes.SubMenuH3}>Bottles and Cans</h3>
            <p className={classes.SubMenuBeerP}>see bartender</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default OpenBar