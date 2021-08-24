import React, {useState, useEffect} from 'react';
import carouselImages from '../../data/carouselImages';
import {capitalize} from '../../utils/utils';
import './carousel.scss';

const Carousel = () => {
    const images = carouselImages
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        if(index < 0){
            setIndex(images.length -1)
        }
        if(index > images.length -1){
            setIndex(0)
        }
    }, [images, index])

    useEffect(()=> {
        const slider = setInterval(()=>{
            handleNext()
        }, 4000);
        return ()=> clearInterval(slider)
    }, [index])

    const handleNext = () => {
        setIndex(index + 1)
    }

    const handlePrev = () => {
        setIndex(index - 1)
    }

    return (
        <div className="carousel">
            <button onClick={handlePrev} className="button-primary btn-next" >
                <i className="fas fa-chevron-left"></i>
            </button>
            <div className="main-container">
                {images.map((item, imageIndex)=> {
                    let position = 'next'
                    if(imageIndex === index){
                        position = 'active'
                    }
                    if(imageIndex === index -1 || 
                        (index === 0 && imageIndex === images.length -1)){
                        position = 'prev'
                    }
                    return(
                        <div key={item} className={`image-container ${position}`}>
                            <div className="image">
                                <img src={`/img/carousel/${item}.jpg`} alt={item}></img>
                            </div>
                            {item.split('-')[1] ? (
                            <h2>{capitalize(item.split('-')[0]) + ' ' + capitalize(item.split('-')[1])}</h2>
                            ) : (
                                <h2>{capitalize(item.split('-')[0])}</h2>
                            )}
                        </div>
                    )
                })}
            </div>
            <button onClick={handleNext} className="button-primary btn-prev" >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Carousel
