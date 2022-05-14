import React from 'react'
import MenuNavLinks from './MenuNavLinks'
import classes from './MenuNavBar.module.css';

const MenuNav = () => {
  return (
    <div>
        <nav className={classes.MenuNav}>
            <MenuNavLinks />
        </nav>
    </div>
  )
}

export default MenuNav