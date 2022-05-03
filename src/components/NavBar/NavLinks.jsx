import React from 'react'

const NavLinks = ({isMobile, closeMobileNav}) => {
  return (
    <ul>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/">Home</a>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/Welcome">Welcome</a>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/EventList">EventList</a>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/MenuMain">MenuMain</a>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/WhosWho">WhosWho</a>
        </li>
        <li onClick={() => isMobile && closeMobileNav()}>
            <a href="/Seating">Seating</a>
        </li>
    </ul>
  )
}

export default NavLinks