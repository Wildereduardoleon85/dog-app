import React, {useState, useContext} from 'react';
import MainContext from '../../context/main/mainContext';
import './search-input.scss';

const SearchInput = () => {
    const [expand, setExpand] = useState(false)

    const mainContext = useContext(MainContext);

    const {handleSearch} = mainContext
    
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
                    onChange={(e) => handleSearch(e)}
                />
            </div>
        </div>
    )
}

export default SearchInput
