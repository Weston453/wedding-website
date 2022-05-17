import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import classes from './MainMenu.module.css'

const MenuMain = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <h1 className={classes.MenuTitle}>Menu</h1>
      <div className={classes.mainMenuContainer}>
        <div className={classes.LinksContainer}>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/CocktailHour"
            >Cocktail Hour</Link>
          </h1>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/OpenBar"
            >Open Bar</Link>
          </h1>
          <h1 className={classes.title}>
            <Link 
              className={classes.menuLink} 
              to="/Dinner"
              >Dinner</Link>
          </h1>
          <h1 className={classes.title} >
            <Link 
              className={classes.menuLink} 
              to="/DessertSnacks"
              >Desserts + Late Night Snacks</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MenuMain