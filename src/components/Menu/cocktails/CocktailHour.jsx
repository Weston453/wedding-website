import React from 'react'
// import NavBar from '../../NavBar/NavBar'
import classes from './Cocktails.module.css'
import MenuNavBar from '../../NavBar/menu-nav/MobileMenuNav'

const CocktailHour = () => {
  return (
    <div>
      <div className='bg'></div>
      {/* <NavBar /> */}
      <MenuNavBar />
      <div className="Container">
        <h1 className={classes.CocktailsTitle}>Cocktail Hour</h1>
        <main className={classes.CocktailsMain}>
          <div>
            <h2 className={classes.passedCocktails}>
              Passed Cocktails
            </h2>
            <h3 className={classes.SubMenuH3}>Rosé All Day</h3>
            <p className={classes.SubMenuP}>tito's lemon, simple, sparkling rosé float</p>
            <h3 className={classes.SubMenuH3}>Homewood Mojito</h3>
            <p className={classes.SubMenuP}>bacardi, mint syrup, lime, sparkling soda</p>
            <h3 className={classes.SubMenuH3}>Strawberry Jalapeño Margarita</h3>
            <p className={classes.SubMenuPLast}>frida kahlo blanco, lime, strawberry, jalapeño agave, salt rim</p>
          </div>
          <hr></hr>
          <div>
            <h2  className={classes.PassedAppetizers}>
              Passed Appetizers
            </h2>
            <h3 className={classes.SubMenuH3}>Artisan Grilled Cheese</h3>
            <p className={classes.SubMenuP}>tomato jam, basil</p>
            <h3 className={classes.SubMenuH3}>Wild Mushroom Tart</h3>
            <p className={classes.SubMenuP}>goat cheese, truffle salt, black garlic</p>
            <h3 className={classes.SubMenuH3}>Smoked Salmon (GF)</h3>
            <p className={classes.SubMenuP}>cucumber, lemon crème fraiche, dill</p>
            <h3 className={classes.SubMenuH3}>Dungeness Crab Cake</h3>
            <p className={classes.SubMenuP}>lemon aioli, fried caper</p>
            <h3 className={classes.SubMenuH3}>Pork Belly Taco</h3>
            <p className={classes.SubMenuP}>avocado mousse, pico de gallo, micro cilantro</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CocktailHour