import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './ui-components/Auth';
import Main from './Elements/Main';
import Home from './Pages/Home';
import Weather from './Pages/Weather';
import './Pages/Weather.css';
import Navbar from './Elements/Navbar';
import UserNavbar from './Elements/UserNavbar';
import UserHome from './Pages/UserHome';

function App() {
  return (
    <div>
   
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdashboard' element={<Main Children={<UserHome/>}/>} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
     
    </div>
  );
}

export default App;

