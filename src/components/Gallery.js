import React from 'react';

const Gallery = ({images}) => {
    return (
        <div className="gallery">
            {images.length > 1 && images.map( i => (
                <div key={i}>
                    <img src={i} alt="" />
                </div>
            ))}
        </div>
    )
}
export default Gallery
