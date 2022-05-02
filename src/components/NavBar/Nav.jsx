import classes from './NavBar.module.css';
import React from 'react'
import NavLinks from './NavLinks'

const Nav = () => {
  return (
    <div>
        <nav className={classes.Nav}>
            <NavLinks />
        </nav>
    </div>
  )
}

export default Nav