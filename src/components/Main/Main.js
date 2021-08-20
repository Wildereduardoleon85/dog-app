import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import './main.scss';

const Main = () => {
    const [selected, setSelected] = useState([])
    const [allBreeds, setAllBreeds] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchAllBreeds()
    }, [])

    const fetchAllBreeds = async() => {
        const url = 'https://dog.ceo/api/breeds/list/all'
        const res = await axios.get(url)
        setAllBreeds(res.data.message)
    }

    const fetchImages = async(text) => {
        const url = `https://dog.ceo/api/breed/${text}/images`
        const res = await axios.get(url)
        setImages(images.concat(res.data.message))
    }

    const handleChange = e => {
        if(e.target.checked === true){
            fetchImages(e.target.parentElement.textContent)
        }else{
            setImages(images.filter(
                x => x.split('/')[4] !== e.target.parentElement.textContent
                ))
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
                            {Object.keys(allBreeds).length > 1 && Object.keys(allBreeds).map(item => (
                                <Sidebar handleChange={handleChange} key={item} item={item} allBreeds={allBreeds}/>
                            ))}
                        </ul>
                    </div>
                </div>
                <Gallery images={images}/>
            </div>
        </section>
    )
}

export default Main
