import React, { useState } from 'react'
import classes from './NavBar.module.css';
import NavLinks from './NavLinks'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'

const MobileNav = () => {

  const [ open, setOpen ] = useState(false)

  const hamburgerIcon = <CgMenuRound className={classes.Hamburger} 
                        size="40px"
                        onClick={() => setOpen(!open)}
                        />

  const closeHamburger = <CgCloseO className={classes.Hamburger} 
                        size="40px"
                        onClick={() => setOpen(!open)}
                        />

  return (
    <nav className={classes.MobileNav}>
      {open ? closeHamburger : hamburgerIcon}
      {open && <NavLinks />}

    </nav>
  )
}

export default MobileNav