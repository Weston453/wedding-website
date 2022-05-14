import classes from './MenuNavBar.module.css';
import React from 'react'
import MobileMenuNav from './MobileMenuNav'
import MenuNav from './MenuNav'

const MenuNavBar = () => {
  return (
    <div className={classes.MenuNavBar}>  
      <MenuNav />
      <MobileMenuNav />
    </div>
  )
}

export default MenuNavBar