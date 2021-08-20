import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="logo">
                    <img src="/img/footprint.svg" alt="footprint" />
                </li>
                <li>
                    Dogs Lovers
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
