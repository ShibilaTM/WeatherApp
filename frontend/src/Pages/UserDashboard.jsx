import React from 'react';
import UserNavbar from '../Elements/UserNavbar';

import WeatherGraph from './WeatherGraph';

const UserDashboard = () => {
  return (
    <div>
      <UserNavbar />
      <WeatherGraph/>
    </div>
  );
};

export default UserDashboard;

