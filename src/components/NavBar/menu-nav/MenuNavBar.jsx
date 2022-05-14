import React from 'react'
import MobileMenuNav from './MobileMenuNav'
import MenuNav from './MenuNav'
import classes from './MenuNavBar.module.css';

const MenuNavBar = () => {
  return (
    <div className={classes.MenuNavBar}>
      <MenuNav />
      <MobileMenuNav />
    </div>
  )
}

export default MenuNavBar