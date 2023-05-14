import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.png'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
          </NavLink>
          <div className='side-nav-div'>
            <div><p1>PUBLIC</p1></div>
              <NavLink to='/Questions' className='side-nav-links' activeClass='active'>
                <img src={Globe} alt="" style={{width:"18px"}}/>
                <p style={{paddingleft: "10px"}}>Questions</p>
              </NavLink>
              <NavLink to='/tags'className='side-nav-links' activeClass='active' style={{padding: "40px"}} >
               <p>Tags</p>
              </NavLink>
              <NavLink to='/tags'className='side-nav-links' activeClass='active' style={{padding: "40px"}} >
               <p>Users</p>
              </NavLink>
             </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
