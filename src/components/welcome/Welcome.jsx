import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Welcome.module.css'

const Welcome = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
        <h1 className={classes.welcomeTitle}>Welcome</h1>
        <main>
          <p className={classes.welcomePOne}>  
            We’re so happy you could join us for our festivities today.
            Everything you need to know can be found on this website. Please use the menu above to navigate.
          </p>
          <hr></hr>
          <h1 className={classes.welcomeUnplugged}>
            Unplugged Ceremony
          </h1>
          <p className={classes.welcomePTwo}>
            We really want to see your lovely faces – not your devices. Please silence and put away your cell phones and other devices during our ceremony so we can all enjoy this special moment free of any distractions Don’t worry, we have a wonderful photography/videography team who will capture the ceremony, and we will happily share the best pictures and videos later on. 
          </p>
        </main>
      </div>
    </div>
  )
}

export default Welcome