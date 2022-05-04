import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({isMobile, closeMobileNav}) => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/eventList">Events</Link>
        <Link to="/menuMain">Menu</Link>
        <Link to="/whosWho">Whos Who</Link>
        <Link to="/seating">Seating</Link>
    </nav>
  )
}

export default NavLinks