import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import RunningTruck from '../components/RunningTruck';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const [isTruckRunning, setIsTruckRunning] = useState(true);

  return (
    <>
      <Navbar /> 
      {     
        isTruckRunning
        ? (
          <RunningTruck setIsTruckRunning={setIsTruckRunning} />
        )
        : (
          <div>
            <Outlet />
          </div>
        )
      }
    </>
  );
};

export default MainLayout;
