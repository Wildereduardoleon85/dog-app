import React from 'react';

const Sidebar = ({item, allBreeds, handleChange, handleChange2}) => {
    return (
        <div>
            <li style={allBreeds[item].length > 0 ? {marginLeft: '30px'}: null}>
                <label 
                    style={allBreeds[item].length > 0 ? {fontWeight: 'bold'}: null} 
                    className="checkbox" htmlFor={item}>
                    <input 
                        onChange={handleChange} 
                        type="checkbox" 
                        id={item} 
                        style={allBreeds[item].length > 0 ? {display: 'none'}: null}
                    />
                    <div 
                        className="box"
                        style={allBreeds[item].length > 0 ? {display: 'none'} : null}
                    >
                    </div>
                    {item}
                </label>
            </li>
            
            {allBreeds[item].length > 0 && allBreeds[item].map(i => (
                <li className="sub-breed" key={`${item}-${i}`}>
                    <label className="checkbox" htmlFor={`${item}-${i}`}>
                        <input onChange={handleChange2} type="checkbox" id={`${item}-${i}`} />
                        <div className="box"></div>
                        {i}
                    </label>
                </li>
            ))}
        </div>
    )
}

export default Sidebar
