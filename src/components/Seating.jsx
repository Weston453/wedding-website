import React from 'react'

const Seating = () => {
  return (
    <div className='Container'>
      <section>
        <h1>Seating Chart</h1>
        <div>hamburger</div>
      </section>
      <main>
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
          <input>Enter your last name here</input>
          <button>Find table</button>
        </div>
      </main>
    </div>
  )
}

export default Seating