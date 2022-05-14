import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Welcome.module.css'
import Proposal from '../images/proposal.jpg'

const Welcome = () => {
  return (
    <div>
      <div className='bg'></div>
      <NavBar />
      <div className="Container">
      <img className={classes.proposal} src={Proposal} alt="Proposal" />           
        <h1 className={classes.welcomeTitle}>K + W</h1>
        <main className={classes.welcomeMain}>
          <h1>Welcome</h1>
          <p className={classes.welcomeP}>  
            We’re so happy you could join us for our festivities today.
            Everything you need to know can be found on this website. Please use the menu above to navigate.
          </p>
          <hr></hr>
          <h1 className={classes.welcomeSubTitle}>
            Unplugged Ceremony
          </h1>
          <p className={classes.welcomeP}>  
            We really want to see your lovely faces – not your devices. Please silence and put away your cell phones and other devices during our ceremony so we can all enjoy this special moment free of any distractions. Don’t worry, we have a wonderful photography/videography team who will capture the ceremony, and we will happily share the best pictures and videos later on. 
          </p>
          <hr></hr>
          <h1 className={classes.welcomeSubTitle}>
            Tag us!
          </h1>
          <p className={classes.welcomeP}>  
            If you capture any moments of today's events and post them on social media, we would love to see them! Please tag <strong>#KorieWestonWedding</strong> in your post.
          </p>
        </main>
      </div>
    </div>
  )
}

export default Welcome