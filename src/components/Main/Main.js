import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import Loading from '../../layout/Loading/Loading';
import './main.scss';

const Main = () => {
    const [allBreeds, setAllBreeds] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        fetchAllBreeds()
    }, [])

    const fetchAllBreeds = async() => {
        setLoading(true)
        const url = 'https://dog.ceo/api/breeds/list/all'
        const res = await axios.get(url)
        setAllBreeds(res.data.message)
        setLoading(false)
    }

    const fetchImages = async(text) => {
        setLoading(true)
        const url = `https://dog.ceo/api/breed/${text}/images`
        const res = await axios.get(url)
        setImages(res.data.message.concat(images))
        setLoading(false)
    }

    const handleChange = e => {
        if(e.target.checked === true){
            fetchImages(e.target.parentElement.textContent.toLowerCase())
        }else{
            setImages(images.filter(
                x => x.split('/')[4] !== e.target.parentElement.textContent.toLowerCase()
                ))
        } 
    }

    const handleChange2 = async e => {
        const parentText = e.target.parentElement.parentElement.parentElement.children[0].textContent.toLowerCase();
        const innerText = e.target.parentElement.textContent.toLowerCase();
        const joinedText = parentText + '-' + innerText
        if(e.target.checked === true){
            setLoading(true)
            const res = await axios.get(`https://dog.ceo/api/breed/${parentText}/images`)
            const fetchedImages = res.data.message
            const filteredImages = fetchedImages.filter(x => x.split('/')[4] === joinedText)
            setImages(filteredImages.concat(images))
            setLoading(false)
        }else{
            setImages(images.filter(
                x => x.split('/')[4] !== joinedText 
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
                    <div className="list">
                        <ul>
                            {Object.keys(allBreeds).length > 1 && Object.keys(allBreeds).map(item => (
                                <Sidebar 
                                    handleChange={handleChange} 
                                    key={item} 
                                    item={item} 
                                    allBreeds={allBreeds}
                                    handleChange2={handleChange2}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {loading ? <Loading/> : <Gallery loading={loading} images={images}/>}
            </div>
        </section>
    )
}

export default Main
