import classes from './NavBar.module.css';
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
        <Nav />
        <MobileNav />
    </div>
  )
}

export default NavBar