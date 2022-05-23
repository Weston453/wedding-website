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
        <Route path='/event-list' element={<EventList />} />
        <Route path='/main-menu' element={<MenuMain />} />
        <Route path='/main-menu/cocktail-hour' element={<CocktailHour />} />
        <Route path='/main-menu/open-bar' element={<OpenBar />} />
        <Route path='/main-menu/dinner' element={<Dinner />} />
        <Route path='/main-menu/desserts-and-snacks' element={<DessertSnacks />} />
        <Route path='/whos-who' element={<WhosWho />} />
        <Route path='/seating' element={<Seating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
