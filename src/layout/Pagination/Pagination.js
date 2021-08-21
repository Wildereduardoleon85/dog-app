import React from 'react';
import './pagination.scss';

const Pagination = (props) => {

    const {
        totalImages, 
        imagesPerPage, 
        maxPageNumberLimit, 
        minPageNumberLimit, 
        handlePag, 
        currentPage, 
        handleNext,
        handlePrev
    } = props

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination">
            <ul>
                <li>
                    <button 
                        onClick={handlePrev}
                        disabled={currentPage === pageNumbers[0] ? true : false}
                    >
                        prev
                    </button>
                </li>
            {pageNumbers.map(i => {
                if(i < maxPageNumberLimit + 1 && i > minPageNumberLimit){
                    return (
                        <li key={i}>
                            <button 
                                id={i} 
                                onClick={handlePag} 
                                className={currentPage === i ? 'active' : null}
                            >
                                {i}
                            </button>
                        </li>
                        )
                }else{
                    return null
                }
            })}
                <li>
                    <button 
                        onClick={handleNext}
                        disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
                    >
                        next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
