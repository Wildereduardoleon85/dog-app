import React, {useContext} from 'react';
import MainContext from '../context/main/mainContext';
import {capitalize} from '../utils/Utils';

const Sidebar = ({item}) => {
    const mainContext = useContext(MainContext);

    const {handleChange, breedSelected} = mainContext


    return (
        <div>
            <li 
                className="breed"
            >
                <label 
                    className="checkbox" htmlFor={item} 
                >
                    <input 
                        onChange={(e) => handleChange(e)} 
                        type="checkbox" 
                        id={item}
                        checked={breedSelected.indexOf(item) > -1}
                    />
                    <div className="box">
                    </div>
                    {capitalize(item)}
                </label>
            </li>
        </div>
    )
}

export default Sidebar
