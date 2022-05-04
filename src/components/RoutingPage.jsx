import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Welcome from './components/Welcome';
import EventList from './components/EventList';
import MenuMain from './components/MenuMain';
import CoctailHour from './components/Menu/CoctailHour';
import OpenBar from './components/Menu/OpenBar';
import Dinner from './components/Menu/Dinner';
import DessertSnacks from './components/Menu/DessertSnacks';
import WhosWho from './components/WhosWho';
import Seating from './components/Seating';


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