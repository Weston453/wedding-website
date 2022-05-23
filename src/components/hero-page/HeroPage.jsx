import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import classes from './HeroPage.module.css'

const HeroPage = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className={classes.HeroContainer}>
        <h1>Welcome to</h1>
        <h1>Korie and Weston's</h1> 
        <h1>Wedding</h1>
        <Link to="/welcome"><button>Join us</button></Link>
      </div>
    </div>
  )
}

export default HeroPage