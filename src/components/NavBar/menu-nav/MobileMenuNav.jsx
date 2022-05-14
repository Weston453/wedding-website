import React, { useState } from 'react'
import classes from './MenuNavBar.module.css';
import MenuNavLinks from './MenuNavLinks'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
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

  const backArrow = <Link to="/menuMain">
                      <BsArrowLeft size="40px" className={classes.backArrow} />
                    </Link>

  const closeMobileMenuNav = () => setOpenMenu(false)

  return (
    <nav className={classes.MobileMenuNav}>
      {backArrow}
      {openMenu ? closeMenuHamburger : hamburgerMenuIcon}
      {openMenu && <MenuNavLinks isMobileMenu={true} closeMobileMenuNav={closeMobileMenuNav} />}
    </nav>
  )
}

export default MobileMenuNav