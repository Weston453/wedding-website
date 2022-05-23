import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({isMobile, closeMobileNav}) => {
  return (
    <nav>
      <ul>
        <Link to="/welcome">Welcome</Link>
        <Link to="/event-list">Order of Events</Link>
        <Link to="/main-menu">Menu</Link>
        <Link to="/whos-who">Who's Who</Link>
        <Link to="/seating">Seating</Link>
      </ul>
    </nav>
  )
}

export default NavLinks