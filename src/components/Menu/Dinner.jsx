import React from 'react'
import { Link } from 'react-router-dom'

const Dinner = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Dinner</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>
            First Course
          </h2>
          <h3>West Shore Salad</h3>
          <p>baby mixed greens, cucumber, tomato, carrots, champagne dressing</p>
        </div>
        <div>
          <h2>
            Main Course
          </h2>
          <h3>Braised Beef Short Rib</h3>
          <p>roasted root vegetables, creamy truffled polenta, natural beef jus</p>
          <h3>Pacific Salmon Fillet</h3>
          <p>grilled asparagus, mediterranean lemon couscous, tomato basil broth</p>
          <h3>Grilled Vegetable Skewers</h3>
          <p>mediterranean lemon couscous, baby kale, balsamic glaze</p>
        </div>
      </main>
      <Link to="/MenuMain">MenuMain</Link>
    </div>
  )
}

export default Dinner