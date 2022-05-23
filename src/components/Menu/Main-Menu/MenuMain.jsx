import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import classes from './MenuMain.module.css'

const MenuMain = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className={classes.mainMenuContainer}>
        <h1 className={classes.MenuTitle}>Menu</h1>
        <div className={classes.LinksContainer}>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/main-menu/cocktail-hour"
            >Cocktail Hour</Link>
          </h1>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/main-menu/open-bar"
            >Open Bar</Link>
          </h1>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/main-menu/dinner"
            >Dinner</Link>
          </h1>
          <h1 className={classes.title} >
            <Link 
              className={classes.menuLink} 
              to="/main-menu/desserts-and-snacks"
            >Desserts + Late Night Snacks</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MenuMain