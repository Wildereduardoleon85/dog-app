import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import Loading from '../../layout/Loading/Loading';
import SearchInput from '../SearchInput/SearchInput';
import './main.scss';

const Main = () => {
    const [breeds, setBreeds] = useState([])
    const [subBreeds, setSubBreeds] = useState([])
    const [all, setAll] = useState([])
    const [list, setList] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [showAll, setShowAll] = useState(true)
    const [showBreeds, setShowBreeds] = useState(false)
    const [showSubBreeds, setShowSubBreeds] = useState(false)
    
    useEffect(() => {
        fetchAllBreeds()
    }, [])

    const fetchAllBreeds = async () => {
        setLoading(true)
        const url = 'https://dog.ceo/api/breeds/list/all'
        const res = await axios.get(url)
        const fetchedData = res.data.message
        const breeds = Object.keys(fetchedData)

        const subBreeds = Object.entries(fetchedData).map(item => {
            return item[1].map(item2 => {
                return item[0] + '-' + item2
            })
        }).filter(fil=> {
            return fil.length > 0
        }).flat()

        const sortByLetter = ( a, b ) => {
            if ( a < b ){ return -1 }
            if ( a > b ){ return 1 }
            return 0;
          }

        setSubBreeds(subBreeds)
        setBreeds(breeds)
        setAll(breeds.concat(subBreeds).sort(sortByLetter))
        setLoading(false)
    }

    const handleChange = async(e) => {
        const text = e.target.parentElement.textContent.toLowerCase().split('-')[0]
        const subBreed = e.target.parentElement.textContent.toLowerCase().split('-')[1]
        if(e.target.checked === true && subBreed){
            setLoading(true)
            const res = await axios.get(`https://dog.ceo/api/breed/${text}/images`)
            const fetchedData = res.data.message
            const filtered = fetchedData.filter(item=> {
                return item.includes(text + '-' + subBreed)
            })
            setImages(filtered.concat(images))
            setLoading(false)
            console.log(text)
        }
        if(e.target.checked === true && !subBreed){
            setLoading(true)
            const res = await axios.get(`https://dog.ceo/api/breed/${text}/images`)
            const fetchedData = res.data.message
            const filtered = fetchedData.filter(item=> {
                return item.split('/')[4] === text
            })
            setImages(filtered.concat(images))
            setLoading(false)
            console.log(text)
        }
        if(e.target.checked === false && !subBreed){
            setImages(images.filter(item =>{
                return !item.includes(text)
                } 
            )) 
        } 
        if(e.target.checked === false && subBreed){
            setImages(images.filter(item =>{
                return !item.includes(text + '-' + subBreed)
                } 
            )) 
        } 
    }

    const handleAll = () => {
        setList(all)
        setShowAll(true)
        setShowBreeds(false)
        setShowSubBreeds(false)
    }

    const handleBreeds = () => {
        setList(breeds)
        setShowAll(false)
        setShowBreeds(true)
        setShowSubBreeds(false)
    }

    const handleSubBreeds = () => {
        setList(subBreeds)
        setShowAll(false)
        setShowBreeds(false)
        setShowSubBreeds(true)
    }

    const clear = () => {
        if(showAll){
            setList(all)
        }
        if(showBreeds){
            setList(breeds)
        }
        if(showSubBreeds){
            setList(subBreeds)
        }
    }

    const handleSearch = (e) => {
        if(list.length > 0){
            const filtered = list.filter(item=>{
                return item.includes(e.target.value)
            })
            setList(filtered)
        }
        if(list.length === 0){
            const filtered = all.filter(item=>{
                return item.includes(e.target.value)
            })
            setList(filtered)
        }
        if(e.target.value === ''){
            clear()
        }
    }

    return (
        <section className="main">
            <h1>Dogs Breeds</h1>
            <div className="container">
                <div className="sidebar">
                    <div className="buttons">
                        <button className={`button ${showAll && 'active'}`} onClick={handleAll}>All</button>
                        <button className={`button ${showBreeds && 'active'}`} onClick={handleBreeds}>Breeds</button>
                        <button className={`button ${showSubBreeds && 'active'}`} onClick={handleSubBreeds}>Sub-Breeds</button>
                    </div>
                    <SearchInput handleSearch={handleSearch}/>
                    <div className="list">
                        <ul>
                            {list.length === 0 ? all.map(item => (
                                <Sidebar 
                                    handleChange={handleChange} 
                                    key={item} 
                                    item={item} 
                                />
                            )) : list.length > 0 && list.map(item => (
                                <Sidebar 
                                    handleChange={handleChange} 
                                    key={item} 
                                    item={item} 
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
