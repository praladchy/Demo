import React from 'react'
import { NavLink } from 'react-router-dom'
import Lable from '../../Lable/Lable'
// import { NavData } from '../../Dummydata/NavData'
import "./TopNavigation.css"
const TopNavigation = ({ NavData = [] }) => {
    return (
        <div>
            {/* <BrowserRouter> */}
            <div className='Topnavigation-Main-Container'>
                <div className='TopNavigation-Lable-container'>
                   <NavLink to="/"><h1><Lable Lable='Des tiny'/></h1></NavLink> 

                </div>
                <div className='Topnavigation-Login-Form-Container'>

                    {
                        NavData.map((each, index) => (
                            <div className='Left-side-TopNavigation-Container' >
                                <NavLink to={each?.url}>{each?.Location}</NavLink>
                            </div>
                        ))
                    }

                </div>

            </div>

            {/* </BrowserRouter> */}
        </div >
    )
}

export default TopNavigation