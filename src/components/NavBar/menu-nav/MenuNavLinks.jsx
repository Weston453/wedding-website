import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MenuNavBar.module.css'

const MenuNavLinks = ({isMobileMenu, closeMobileMenuNav}) => {
  return (
    <nav>
        <ul>
            <Link className={classes.link} to="/main-menu">Menu</Link>
            <Link className={classes.link} to="/main-menu/cocktail-hour">Cocktail Hour</Link>
            <Link className={classes.link} to="/main-menu/open-bar">Open Bar</Link>
            <Link className={classes.link} to="/main-menu/dinner">Dinner</Link>
            <Link className={classes.link} to="/main-menu/desserts-and-snacks">Desserts + Late Night Snacks</Link>
        </ul>
    </nav>
  )
}

export default MenuNavLinks