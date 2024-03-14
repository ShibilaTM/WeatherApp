import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './ui-components/Auth';
import Home from './Pages/Home';
import './Pages/Weather.css';
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <div>
   
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdashboard' element={<UserDashboard/>} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
     
    </div>
  );
}

export default App;

