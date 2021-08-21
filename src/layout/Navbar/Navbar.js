import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <img src="/img/footprint.svg" alt="footprint" />
                </li>
                <li>
                    Dogs Lovers
                </li>
            </ul>

            <ul>
                <li>
                    <button>Browse All Breeds</button>
                </li>
                <li>
                    <button>Sub.Breeds</button>
                </li>
            </ul>
        </nav>
    ) 
}

export default Navbar

