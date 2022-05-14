import React, { useState } from 'react'
import classes from './NavBar.module.css';
import NavLinks from './NavLinks'
import { FiMenu } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'

const MobileNav = () => {

  const [ open, setOpen ] = useState(false)

  const hamburgerIcon = <FiMenu className={classes.Hamburger} 
                        size="40px"
                        // color="white"
                        onClick={() => setOpen(!open)}
                        />

  const closeHamburger = <VscChromeClose className={classes.Hamburger} 
                        size="40px"
                        // color="white"
                        onClick={() => setOpen(!open)}
                        />

  const closeMobileNav = () => setOpen(false)

  return (
    <nav className={classes.MobileNav}>
      {open ? closeHamburger : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />}
    </nav>
  )
}

export default MobileNav