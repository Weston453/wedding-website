import './App.css';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroPage />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/eventList' element={<EventList />} />
        <Route path='/menuMain' element={<MenuMain />} />
        <Route path='/coctailHour' element={<CoctailHour />} />
        <Route path='/openBar' element={<OpenBar />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='/dessertSnacks' element={<DessertSnacks />} />
        <Route path='/whosWho' element={<WhosWho />} />
        <Route path='/seating' element={<Seating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
