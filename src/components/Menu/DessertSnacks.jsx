import React from 'react'
import { Link } from 'react-router-dom'

const DessertSnacks = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Dessert + Late Night Snacks</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>
            Dessert
          </h2>
          <h3>Wedding Cake</h3>
          <p>almond cake, almond buttercream, raspberry jam</p>
          <h3>Dessert Bar</h3>
          <p>brownies, hand pies (berry/apple), macarons (vanilla/raspberry)</p>
        </div>
        <div>
          <h2>
            Late Night Snacks
          </h2>
          <h4>After 9pm</h4>
          <h3>Local Angus Beef Sliders</h3>
          <p>do you really care what’s in it at this point?</p>
          <h3>Cheese Quesadilla</h3>
          <p>tortilla, cheese, obvi…</p>
        </div>
      </main>
      <Link to="/MenuMain">MenuMain</Link>
    </div>
  )
}

export default DessertSnacks