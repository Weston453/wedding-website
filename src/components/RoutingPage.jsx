import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage';
import Welcome from './Welcome';
import EventList from './EventList';
import MenuMain from './MenuMain';
import CoctailHour from './Menu/CoctailHour';
import OpenBar from './Menu/OpenBar';
import Dinner from './Menu/Dinner';
import DessertSnacks from './Menu/DessertSnacks';
import WhosWho from './WhosWho';
import Seating from './Seating';


const RoutingPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HeroPage />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/EventList' element={<EventList />} />
          <Route path='/MenuMain' element={<MenuMain />} />
          <Route path='/CoctailHour' element={<CoctailHour />} />
          <Route path='/OpenBar' element={<OpenBar />} />
          <Route path='/Dinner' element={<Dinner />} />
          <Route path='/DessertSnacks' element={<DessertSnacks />} />
          <Route path='/WhosWho' element={<WhosWho />} />
          <Route path='/Seating' element={<Seating />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutingPage