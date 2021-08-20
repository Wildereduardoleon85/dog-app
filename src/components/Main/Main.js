import React, { useState } from 'react';
import './main.scss';


const Main = () => {
    const [text, setText] = useState('')

    const handleChange = e => {
        if(e.target.checked === true){
            setText(e.target.parentElement.textContent)
        }else{
            setText('')
        }
    } 

    return (
        <section className="main">
            <h1>Dogs Breeds</h1>
            <div className="container">
                <div className="sidebar">
                    <h2>Breeds</h2>
                    <input type="search" placeholder="Search for Dogs Breeds" />
                    <div>
                        <ul>
                            <li>
                                {/* <input type="checkbox" id="check" onChange={handleChange}/>
                                <label htmlFor="check" >Doberman</label> */}
                                <label className="checkbox" htmlFor="check">
                                    <input onChange={handleChange} type="checkbox" id="check" />
                                    <div className="box"></div>
                                    Doberman
                                </label>
                            </li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                            <li>Doberman</li>
                        </ul>
                    </div>
                </div>

                <div className="galery">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Main
