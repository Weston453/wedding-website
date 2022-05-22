import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './components/hero-page/HeroPage';
import Welcome from './components/welcome/Welcome';
import EventList from './components/events-list/EventList';
import MenuMain from './components/Menu/Main-Menu/MenuMain';
import CocktailHour from './components/Menu/cocktails/CocktailHour';
import OpenBar from './components/Menu/open-bar/OpenBar';
import Dinner from './components/Menu/dinner/Dinner';
import DessertSnacks from './components/Menu/dessert-snacks/DessertSnacks';
import WhosWho from './components/whos-who/WhosWho';
import Seating from './components/seating/Seating';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroPage />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/eventList' element={<EventList />} />
        <Route path='/menuMain' element={<MenuMain />} />
        <Route path='/menuMain/cocktailHour' element={<CocktailHour />} />
        <Route path='/menuMain/openBar' element={<OpenBar />} />
        <Route path='/menuMain/dinner' element={<Dinner />} />
        <Route path='/menuMain/dessertSnacks' element={<DessertSnacks />} />
        <Route path='/whosWho' element={<WhosWho />} />
        <Route path='/seating' element={<Seating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
