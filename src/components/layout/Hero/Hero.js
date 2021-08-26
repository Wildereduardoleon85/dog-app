import React, {useState, useEffect} from 'react';
import './hero.scss';

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0)
    

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollY);
        return () => window.removeEventListener('scroll', handleScrollY) 
    })

    const handleScrollY = () => setOffsetY(window.pageYOffset)

    console.log(window.pageOffset)

    return (
        <section 
            id="home" 
            className="hero" 
            style={{backgroundImage: `url('./img/background.jpg')`, transform: `translateY(-${offsetY * 0.5}px)`}}
        >
            <h1
                style={{transform: `translateY(${offsetY * 0.4}px)`}}
            >
                The Best Web Site for browsing dogs breeds
            </h1>
        </section>
    )
}

export default Hero
