import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavigation from '../Navigation/TopNavigation/TopNavigation'
import { NavData } from '../Dummydata/NavData'
import { Navpath } from '../Dummydata/Navpath'
import './Routing.css';
export const Routing = () => {
  return (
    <div>

      <BrowserRouter>
        <TopNavigation NavData={NavData} />
       
       <div className='Login-Form-Container'> 
       {Navpath.map((each, index) => (
          <Routes>
            <Route path={each?.path} element={each?.element} />
          </Routes>
        ))

        }
        </div>
      </BrowserRouter>
    </div>
  )
}
