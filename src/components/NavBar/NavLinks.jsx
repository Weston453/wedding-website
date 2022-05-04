import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({isMobile, closeMobileNav}) => {
  return (
    <nav>
      <ul>
        {/* <Link to="/">Home</Link> */}
        <Link to="/welcome">Welcome</Link>
        <Link to="/eventList">Order of Events</Link>
        <Link to="/menuMain">Menu</Link>
        <Link to="/whosWho">Who's Who</Link>
        <Link to="/seating">Seating</Link>
      </ul>
    </nav>
  )
}

export default NavLinks