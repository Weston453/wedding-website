import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './WhosWho.module.css'
import Groom from '../images/groom.png'
import Bride from '../images/bride.png'

const WhosWho = () => {
  return (
    <div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.WhosWhoTitle}>Who's Who</h1>
        <main className={classes.WhosWhoMain}>
          <div>
            <h1>
              Groom's Side
            </h1>
            <img className={classes.BAndGIcons} src={Groom} alt="Groom" />           
            <h2>Mike and Cheryl Isheim</h2>
            <p>Weston's Parents</p>
            <h2>Dell Barnes</h2>
            <p>Best Man</p>
            <h2>Ray Reynolds</h2>
            <p>Groomsman</p>
            <h2>Lucas Broskey</h2>
            <p>Groomsman</p>
            <h2>Gabe Cohen</h2>
            <p>Groomsman</p>
            <h2>Emma Isheim</h2>
            <p>Bridesmaid</p>
          </div>
          <div className={classes.lastDiv}>
            <h1>
              Bride's Side
            </h1>
            <img className={classes.BAndGIcons} src={Bride} alt="Bride" />     
            <h2>Ken and Kelly Bayne</h2>
            <p>Korie's Parents</p>
            <h2>Rachel Brenneman and <br/> Mark Bensen</h2>
            <p>Maid/Man of Honor</p>
            <h2>Neha Jwala</h2>
            <p>Bridesmaid</p>
            <h2>Cortney VanMilligen</h2>
            <p>Bridesmaid</p>
            <h2>Courtney Owings</h2>
            <p>Bridesmaid</p>
            <h2>Ella Isheim</h2>
            <p>Bridesmaid</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default WhosWho