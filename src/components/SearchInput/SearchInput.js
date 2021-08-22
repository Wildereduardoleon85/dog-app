import React, {useState} from 'react';
import './search-input.scss';

const SearchInput = () => {
    const [expand, setExpand] = useState(false)
    
    return (
        <div 
            className="search" 
            style={expand ? {width: '100%'} : null}
        >
            <button onClick={()=> setExpand(!expand)}>
                <i className="fas fa-search" ></i>
            </button>
            <div>
                <input 
                    type="search" 
                    placeholder="Search for Breeds..."
                />
            </div>
        </div>
    )
}

export default SearchInput
