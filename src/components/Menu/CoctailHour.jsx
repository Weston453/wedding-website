import React from 'react'
import { Link } from 'react-router-dom'

const CoctailHour = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Cocktail Hour</h1>
        <div>hamburger</div>
      </section>
      <main>
        <div>
          <h2>
            Passed Cocktails
          </h2>
          <h3>Rosé All Day</h3>
          <p>tito's lemon, simple, sparkling rosé float</p>
          <h3>Homewood Mojito</h3>
          <p>bacardi, mint syrup, lime, sparkling soda</p>
          <h3>Strawberry Jalapeño Margarita</h3>
          <p>frida kahlo blanco, lime, strawberry, jalapeño agave, salt rim</p>
        </div>
        <div>
          <h2>
            Passed Appetizers
          </h2>
          <h3>Artisan Grilled Cheese</h3>
          <p>tomato jam, basil</p>
          <h3>Wild Mushroom Tart</h3>
          <p>goat cheese, truffle salt, black garlic</p>
          <h3>Smoked Salmon (GF)</h3>
          <p>cucumber, lemon crème fraiche, dill</p>
          <h3>Dungeness Crab Cake</h3>
          <p>lemon aioli, fried caper</p>
          <h3>Pork Belly Taco</h3>
          <p>avocado mousse, pico de gallo, micro cilantro</p>
        </div>
      </main>
      <Link to="/MenuMain">MenuMain</Link>
    </div>
  )
}

export default CoctailHour