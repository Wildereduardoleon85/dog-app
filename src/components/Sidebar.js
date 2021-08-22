import React, {useContext} from 'react';
import MainContext from '../context/main/mainContext';

const Sidebar = ({item}) => {
    const mainContext = useContext(MainContext);

    const {handleChange} = mainContext

    const capitalize = (str) => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    } 

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
