import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import RunningTruck from '../components/RunningTruck';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { TracingBeam } from '../components/ui/tracing-beam';

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
          <div className='min-h-screen'>
            <Navbar /> 
            <div>
              <Outlet />
            </div>
            <Footer />
          </div>
        )
      }
    </>
  );
};

export default MainLayout;
