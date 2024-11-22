import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'

import RunningTruck from '../components/RunningTruck'


const MainLayout = () => {
    const [isTruckRunning, setIsTruckRunning] = useState(true)

  return (
    <>
      {     
            isTruckRunning
            ?
            <RunningTruck setIsTruckRunning={setIsTruckRunning}/>
            :
            <div>
                <h1>Main Layout</h1>
                <Outlet />
            </div>
      }
        
    </>
  )
}

export default MainLayout