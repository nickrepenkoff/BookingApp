import React from 'react';

import '../styles/navbar.scss'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navBar-container'>
                <span className='logo'>
                    Logotype
                </span>
                <div className='navItems'>
                    <button className="navButton">Register</button>
                    <button className="navButton">Log in</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
