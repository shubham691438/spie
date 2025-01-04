import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import RunningTruck from '../components/RunningTruck';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainLayout = () => {
  const [isTruckRunning, setIsTruckRunning] = useState(true);
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
        document.body.classList.remove('dark');
    };
}, []);

  
  const location = useLocation();
  const path = location.pathname;
  // console.log(path)

  return (
    <>
      
      
      {path === '/' &&  
        isTruckRunning && !sessionStorage.getItem('runningTruckLoaded')
        ? (
          <RunningTruck setIsTruckRunning={setIsTruckRunning} />
        )
        : (
          <div>
            <Navbar /> 
            <div>
              <Outlet />
            </div>
          </div>
        )
      }
    </>
  );
};

export default MainLayout;
