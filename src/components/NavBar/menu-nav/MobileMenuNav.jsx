import React, { useState } from 'react'
import classes from './MenuNavBar.module.css';
import MenuNavLinks from './MenuNavLinks'
import { FiMenu } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'

const MobileMenuNav = () => {
  const [ openMenu, setOpenMenu ] = useState(false)

  const hamburgerMenuIcon = <FiMenu className={classes.MenuHamburger} 
                        size="40px"
                        // color="white"
                        onClick={() => setOpenMenu(!openMenu)}
                        />

  const closeMenuHamburger = <VscChromeClose className={classes.MenuHamburger} 
                        size="40px"
                        // color="white"
                        onClick={() => setOpenMenu(!openMenu)}
                        />

  const closeMobileMenuNav = () => setOpenMenu(false)

  return (
    <nav className={classes.MobileMenuNav}>
      <h1 className={classes.test}>test</h1>
      {openMenu ? closeMenuHamburger : hamburgerMenuIcon}
      {openMenu && <MenuNavLinks isMobileMenu={true} closeMobileMenuNav={closeMobileMenuNav} />}
    </nav>
  )
}

export default MobileMenuNav