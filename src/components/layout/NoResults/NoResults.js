import React from 'react';
import './no-results.scss';

const NoResults = () => {
    return (
        <div className="no-results">
            <div className="no-results-container">
                <div>
                    <img src="/img/sadDog.jpg" alt="" />
                </div>
                <h2>Sorry, there's no images found for the selected Breed...</h2>
            </div>
        </div>
    )
}

export default NoResults
