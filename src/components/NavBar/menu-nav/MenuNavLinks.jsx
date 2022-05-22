import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MenuNavBar.module.css'

const MenuNavLinks = ({isMobileMenu, closeMobileMenuNav}) => {
  return (
    <nav>
        <ul>
            <Link className={classes.link} to="/menuMain">Menu</Link>
            <Link className={classes.link} to="/menuMain/cocktailHour">Cocktail Hour</Link>
            <Link className={classes.link} to="/menuMain/openBar">Open Bar</Link>
            <Link className={classes.link} to="/menuMain/dinner">Dinner</Link>
            <Link className={classes.link} to="/menuMain/dessertSnacks">Desserts + Late Night Snacks</Link>
        </ul>
    </nav>
  )
}

export default MenuNavLinks