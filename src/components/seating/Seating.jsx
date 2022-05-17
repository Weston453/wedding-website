import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Seating.module.css'

const Seating = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className='Container'>
        <h1 className={classes.seatingTitle}>Seating</h1>
        <main className={classes.seatingMain}>
            <h2 className={classes.seatingH2}>
              Where am I sitting?
            </h2>
            <p className={classes.seatingP}>
              Enter your last name below for your table  number
            </p>
            <p className={classes.seatingP}>
              Once you locate your table, please find your seat at the table (your name will be printed on a placecard in front of your seat)
            </p>
            <input placeholder='Enter your last name here'></input>
            <button className={classes.findTableBtn}>Find table</button>
        </main>
      </div>
    </div>
  )
}

export default Seating