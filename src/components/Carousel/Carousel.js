import React, {useEffect, useContext} from 'react';
import MainContext from '../../context/main/mainContext';
import './carousel.scss';

const Carousel = () => {
    const mainContext = useContext(MainContext);

    const {carouselImages, setCarouselImages} = mainContext

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselImages()
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="carousel">
            <div>
                <img src={carouselImages} ></img>
            </div>
        </div>
    )
}

export default Carousel
