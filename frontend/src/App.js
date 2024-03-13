import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './ui-components/Auth';
import Main from './Elements/Main';
import Home from './Pages/Home';
import Weather from './Pages/Weather';
import './Pages/Weather.css';
import Navbar from './Elements/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/userdashboard' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/' element={<Weather />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

