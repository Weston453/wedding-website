import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({isMobile, closeMobileNav}) => {
  return (
    <ul>
        <li onClick={() => isMobile && closeMobileNav()}>
            <Link exact to="/">Home</Link>
        </li>
        <li>
            <Link to="/Welcome">Welcome</Link>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <Link to="/EventList">Events</Link>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <Link to="/MenuMain">Menu</Link>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <Link to="/WhosWho">Whos Who</Link>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <Link to="/Seating">Seating</Link>
        </li>
    </ul>
  )
}

export default NavLinks