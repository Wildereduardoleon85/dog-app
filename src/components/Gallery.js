import React, {useState} from 'react';
import Pagination from '../layout/Pagination/Pagination';

const Gallery = ({images}) => {
    const [maxPageNumberLimit, setMaxPageNumberLimit ] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit ] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    
    const imagesPerPage = 12;
    const pageNumberLimit = 5;
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const handlePag = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        if(currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrev = () => {
        setCurrentPage(currentPage -1)
        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }
    
    return (
        <div className="right">
            <div className="gallery">
                {currentImages.length > 1 && currentImages.map( i => (
                    <div key={i}>
                        <img src={i} alt="" />
                    </div>
                ))}
            </div>
            <Pagination 
                totalImages={images.length} 
                imagesPerPage={imagesPerPage}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
                handlePag={handlePag}
                currentPage={currentPage}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    )
}
export default Gallery
