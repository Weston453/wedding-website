import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="whole-page">
      <section>
        <h1>Korie and Weston's Wedding</h1>
        <div>hamburger</div>
      </section>
      <main>
        <h2>  
          We’re so happy you could join us for our festivities today.
          Everything you need to know can be found on this website. Please use the menu above to navigate.
        </h2>
        <h1>
          Unplugged Ceremony
        </h1>
        <h2>
          We really want to see your lovely faces – not your devices. Please silence and put away your cell phones and other devices during our ceremony so we can all enjoy this special moment free of any distractions Don’t worry, we have a wonderful photography/videography team who will capture the ceremony, and we will happily share the best pictures and videos later on. 
        </h2>
      </main>
      <Link to="/Welcome">Welcome</Link>
      <Link to="/EventList">EventList</Link>
      <Link to="/MenuMain">MenuMain</Link>
      <Link to="/CoctailHour">CoctailHour</Link>
      <Link to="/OpenBar">OpenBar</Link>
      <Link to="/Dinner">Dinner</Link>
      <Link to="/DessertSnacks">DessertSnacks</Link>
      <Link to="/WhosWho">WhosWho</Link>
      <Link to="/Seating">Seating</Link>
    </div>
  )
}

export default Welcome