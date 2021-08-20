import React from 'react';

const Sidebar = ({item, allBreeds, handleChange}) => {
    return (
        <div>
            <li>
                <label className="checkbox" htmlFor={item}>
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
                <li key={i} style={{marginLeft: '30px'}}>
                    <label className="checkbox" htmlFor={i}>
                        <input type="checkbox" id={i} />
                        <div className="box"></div>
                        {i}
                    </label>
                </li>
            ))}
        </div>
    )
}

export default Sidebar
