import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Seating.module.css'

const Seating = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className='Container'>
        <h1 className={classes.WhosWhoTitle}>Seating Chart</h1>
        <main className={classes.seatingMain}>
          <div>
            <h2>
              Where am I sitting?
            </h2>
            <h3>
              Enter your last name below for your table  number
            </h3>
            <h3>
              Once you locate your table, please find your seat at the table (your name will be printed on a placecard in front of your seat)
            </h3>
          </div>
          <div>
            {/* <input>Enter your last name here</input> */}
            <button>Find table</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Seating