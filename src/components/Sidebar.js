import React from 'react';
import Loading from '../layout/Loading/Loading';

const Sidebar = ({item, allBreeds, handleChange, handleChange2}) => {

    const capitalize = (str) => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    } 

    return (
        <div>
            <li 
                style={allBreeds[item].length > 0 ? {marginLeft: '30px'}: null}
                className="breed"
            >
                <label 
                    className="checkbox" htmlFor={item} 
                    style={allBreeds[item].length > 0 ? {pointerEvents: 'none'}: null}
                >
                    <input 
                        onChange={handleChange} 
                        type="checkbox" 
                        id={item} 
                        style={allBreeds[item].length > 0 ? {display: 'none'}: null}
                    />
                    <div className="box" style={allBreeds[item].length > 0 ? {display: 'none'}: null}>
                    </div>
                    {capitalize(item)}
                </label>
            </li>
            
            {allBreeds[item].length > 0 && allBreeds[item].map(i => (
                <li className="sub-breed" key={`${item}-${i}`}>
                    <label className="checkbox" htmlFor={`${item}-${i}`}>
                        <input onChange={handleChange2} type="checkbox" id={`${item}-${i}`} />
                        <div className="box"></div>
                        {capitalize(i)}
                    </label>
                </li>
            ))}
        </div>
    )
}

export default Sidebar
