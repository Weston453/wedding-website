import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './WhosWho.module.css'
import Groom from '../images/groom.png'
import Bride from '../images/bride.png'

const WhosWho = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.WhosWhoTitle}>Who's Who</h1>
        <main className={classes.WhosWhoMain}>
          <div className={classes.WhosWhoFirstDiv}>
            <h1 className={classes.groomTitle}>Groom's Side</h1>
            <img className={classes.BAndGIcons} src={Groom} alt="Groom" />           
            <h2 className={classes.WhosWhoH2}>Mike and Cheryl Isheim</h2>
            <p className={classes.WhosWhoP}>Weston's Parents</p>
            <h2 className={classes.WhosWhoH2}>Dell Barnes</h2>
            <p className={classes.WhosWhoP}>Best Man</p>
            <h2 className={classes.WhosWhoH2}>Raymond Reynolds lll</h2>
            <p className={classes.WhosWhoP}>Groomsman</p>
            <h2 className={classes.WhosWhoH2}>Lucas Broskey</h2>
            <p className={classes.WhosWhoP}>Groomsman</p>
            <h2 className={classes.WhosWhoH2}>Gabe Cohen</h2>
            <p className={classes.WhosWhoP}>Groomsman</p>
            <h2 className={classes.WhosWhoH2}>Emma Isheim</h2>
            <p className={classes.WhosWhoPLast}>Bridesmaid</p>
          </div>
          <hr></hr>
          <div className={classes.WhosWhoLastDiv}>
            <h1 className={classes.brideTitle}>
              Bride's Side
            </h1>
            <img className={classes.BAndGIcons} src={Bride} alt="Bride" />     
            <h2 className={classes.WhosWhoH2}>Ken and Kelly Bayne</h2>
            <p className={classes.WhosWhoP}>Korie's Parents</p>
            <h2 className={classes.WhosWhoH2}>Rachel Brenneman</h2>
            <p className={classes.WhosWhoP}>Maid of Honor</p>
            <h2 className={classes.WhosWhoH2}>Mark Bensen</h2>
            <p className={classes.WhosWhoP}>Man of Honor</p>
            <h2 className={classes.WhosWhoH2}>Neha Jwala</h2>
            <p className={classes.WhosWhoP}>Bridesmaid</p>
            <h2 className={classes.WhosWhoH2}>Cortney VanMilligen</h2>
            <p className={classes.WhosWhoP}>Bridesmaid</p>
            <h2 className={classes.WhosWhoH2}>Courtney Owings</h2>
            <p className={classes.WhosWhoP}>Bridesmaid</p>
            <h2 className={classes.WhosWhoH2}>Ella Isheim</h2>
            <p className={classes.WhosWhoP}>Bridesmaid</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default WhosWho