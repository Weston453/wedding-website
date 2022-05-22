import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Seating.module.css'

const Seating = () => {

  const [ guestName, setGuestName ] = useState("")
  const [ foundPeople, setFoundPeople ] = useState("")

  // const people = ['Korie Bayne - Table 1', 'Korie Bayne: Table 2', 'Korie Bayne: Table 3', 'Korie Bayne: Table 4', 'Korie Bayne: Table 5', 'Korie Bayne: Table 1', 'Korie Bayne: Table 1','cheese wheel', 'oats', 'pasta', 'booster', 'turbo'];
 
  const people = [
    'Susannah Anders - Table 7', 
    'Anthony Armendariz - Table 4', 
    'Evgenia Aroni - Table 6', 
    'Dell Barnes - Wedding Party', 
    'Kelly Bayne - Table 5', 
    'Kenneth Bayne - Table 5', 
    'Patsy Bayne - Table 5', 
    'Roy Bayne - Table 5', 
    'Mark Bensen - Wedding Party', 
    'Ryan Blaschke - Table 2', 
    'Rachel Brenneman - Wedding Party', 
    'Emlee Brewer - Table 5', 
    'Noah Bridwell - Table 7', 
    'Lucas Broskey - Wedding Party', 
    'Layla Burchett - Table 2', 
    'Preston Burchett - Table 2', 
    'Hailey Cherrington - Table 2', 
    'Gabriel Cohen - Wedding Party', 
    'Nikki DeBaroncelli - Table 3', 
    'Liz Delikat - Table 4', 
    'Andrew Dudik - Table 7', 
    'Andrew Dutson - Table 7', 
    'Alex Enright - Table 7', 
    'Cassel Feenstra - Table 2', 
    'Jennifer Ford - Table 2', 
    'Amanda Fujisaki - Table 4', 
    'Carole Fujisaki - Table 4', 
    'Andre Go - Table 6', 
    'Janie Goldsworthy - Table 3', 
    'Alysse Gray - Table 2', 
    'Jamal Habibi - Table 3', 
    'Javad Habibi - Table 5', 
    'Penny Habibi - Table 5', 
    'Christine Gurz Hames - Table 6', 
    'Christine Wilson Hames - Table 6', 
    'Ethan Hames - Table 3', 
    'Jason Hames - Table 6', 
    'Kayleigh Hames - Table 3', 
    'Nicklin Hames - Table 3', 
    'Nico Hames - Table 3', 
    'Scott Hames - Table 6', 
    'Chris Hickman - Table 3', 
    'Sam Hise - Table 7', 
    'Shiona Howard - Table 7', 
    'Cheryl Isheim - Table 4', 
    'Ella Isheim - Wedding Party', 
    'Emma Isheim - Wedding Party', 
    'Janet Isheim - Table 4', 
    'Michael Isheim - Table 4', 
    'Neha Jwala - Wedding Party', 
    'Amy Karcanes - Table 5', 
    'Christine Karcanes - Table 6', 
    'Debbie Karcanes - Table 5', 
    'James Karcanes - Table 5', 
    'Lt. Col. James Karcanes - Table 6', 
    'John Karcanes - Table 5', 
    'Linda Karcanes - Table 5', 
    'Linda Karcanes (Grandma)- Table 5', 
    'Shawn Lord - Table 6', 
    'Maegen Luna - Table 2', 
    'Mateja Lund - Table 7', 
    'Dariia Miroshnikova - Table 2', 
    'John Okal - Table 2', 
    'Kendea Oliver - Table 3', 
    'Courtney Owings - Wedding Party', 
    'April Patrick - Table 4', 
    'Bryan Patrick - Table 4', 
    'Hunter Patrick - Table 4', 
    'Misty Patrick - Table 4', 
    'Natalie Patrick - Table 4', 
    'Fred Read - Table 4', 
    'Peg Read - Table 4', 
    'Raymond Reynolds III - Wedding Party', 
    'Gemma Rose - Wedding Party', 
    'Elizabeth Scholl - Table 6', 
    'Jacqueline Scholl - Table 7', 
    'Katherine Scholl - Table 7', 
    'Michael Scholl - Table 6', 
    'Ethan Slocum - Table 7', 
    'Chevlien Solarez - Table 3', 
    'James Steinman - Table 6', 
    'Randy Steinman - Table 6', 
    'Denise Syracuse - Table 3', 
    'Jason Syracuse - Table 3', 
    'Justin Syracuse - Table 3', 
    'Katie Syracuse - Table 5', 
    'Mark Syracuse - Table 5', 
    'Sophie Syracuse - Table 3', 
    'Cortney VanMilligen - Wedding Party', 
    'Zach Vavra - Table 2', 
    'Jefferson Wagener - Table 6', 
    'Talia Wagener - Table 7', 
    'Scott Wathen - Table 4', 
    'Eric Waugh - Table 2'
  ];
  
  const takeYourSeats = () => {
    const filteredPeople = people.filter((person) => {
      return person.toLowerCase().includes(guestName)
    })
    setFoundPeople(filteredPeople)
  }

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
            <input 
              placeholder='Enter your last name here'
              value={guestName}
              onChange={e => setGuestName(e.target.value.toLowerCase())}
            ></input>
            <button 
              className={classes.findTableBtn}
              onClick={takeYourSeats}
            >
              Find table
            </button>       
              {/* {foundPeople.map((person) => {
                return <li>{person}</li>
              })} */}
              <div className={classes.seatingDisplay}>
                <li className={classes.seatFinderDisplay}>{foundPeople[0]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[1]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[2]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[3]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[4]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[5]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[6]}</li>
                <li className={classes.seatFinderDisplay}>{foundPeople[7]}</li>
              </div>
        </main>
      </div>
    </div>
  )
}

export default Seating