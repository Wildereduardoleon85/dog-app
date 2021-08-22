import React, {useEffect, useState} from 'react';
import './navbar.scss';

const Navbar = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPos])

    const handleScroll = ()=>{
        setScrollPos(document.body.getBoundingClientRect().top);
        setShowNav(document.body.getBoundingClientRect().top > scrollPos);
    };


    return (
        <nav 
            className={showNav ? 'navbar' : null}
            style={scrollPos === 0 ? {height: '100px'} : null}
        >
            <ul>
                <li className="logo">
                    <img src="/img/footprint(white).svg" alt="footprint" />
                </li>
                <li>
                    Dogs Lovers
                </li>
            </ul>

            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Image Gallery</button>
                </li>
            </ul>
        </nav>
    ) 
}

export default Navbar

