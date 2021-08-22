import React from 'react';

const Sidebar = ({item, handleChange}) => {

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
                        onChange={handleChange} 
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
