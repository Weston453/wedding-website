import React from 'react'
import { Link } from 'react-router-dom'

const OpenBar = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Open Bar</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>Wine</h2>
          <h2>Pinot Grigio</h2>
          <p>attems, italy</p>
          <h2>Chardonnay</h2>
          <p>davis bynum, california</p>
          <h2>Pinot Noir</h2>
          <p>stoller family estate, oregon</p>
          <h2>Cabernet</h2>
          <p>oberon, california</p>
          <h2>Brut Prestige</h2>
          <p>mumm napa, california</p>
        </div>
        <div>
          <h2>Spirits</h2>
          <h2>Vodka</h2>
          <p>tito’s, ketel one</p>
          <h2>Rum</h2>
          <p>sailor jerry, goslings, captain morgan, myers dark, malibu</p>
          <h2>Tequila</h2>
          <p>frida kahlo blanco, corralejo reposado</p>
          <h2>Gin</h2>
          <p>beefeater, tanqueray, bombay sapphire</p>
          <h2>Whiskey</h2>
          <p>crown royal, jack daniels, jameson, makers mark, buffalo trace, fireball</p>
          <h2>Scotch</h2>
          <p>johnnie walker black, chivas regal, glenlivet 12</p>
        </div>
        <div>
          <h2>Beer</h2>
          <h2>TBD</h2>
          <h2>TBD</h2>
          <h2>TBD</h2>
          <h2>TBD</h2>
          <h2>TBD</h2>
          <h2>TBD</h2>
        </div>
      </main>
      <Link to="/MenuMain">MenuMain</Link>
    </div>
  )
}

export default OpenBar