import React, { useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

function Header() {

    const [navActive, setNavActive] = useState('no');

    const changeNav = () => {
        navActive == 'no' ? setNavActive('yes') : setNavActive('no');
    }

  return (
    <header>
        <div className="container">
            <div className="brend">
                <h1>Sultan Taxi</h1>
            </div>
            <div className="hamburger">
                <i class="fa-solid fa-bars" onClick={() => changeNav()}></i>
            </div>
            <div className={navActive == 'yes' ? 'menus active' : 'menus'}>
                <i class="fa-solid fa-xmark" onClick={() => changeNav()}></i>
                <NavLink>Home</NavLink>
                <NavLink>Location</NavLink>
                <NavLink>Contact us</NavLink>
                <NavLink>Sign Up</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header
