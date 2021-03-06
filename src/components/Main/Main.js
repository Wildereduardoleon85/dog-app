import React, { useEffect, useContext, useState } from 'react';
import MainContext from '../../context/main/mainContext';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import Carousel from '../Carousel/Carousel';
import Loading from '../layout/Loading/Loading';
import SearchInput from '../SearchInput/SearchInput';
import NoResults from '../layout/NoResults/NoResults';
import './main.scss';
import {capitalize} from '../../utils/utils';

const Main = () => {
    const [drawer, setDrawer] = useState(false)

    const mainContext = useContext(MainContext);

    const {
        all, 
        list,
        loading, 
        fetchData,
        handleAll,
        handleBreeds,
        handleSubBreeds,
        showAll,
        showBreeds,
        showSubBreeds,
        breedSelected,
        clearFilter, 
        images,
        noResults
    } = mainContext
    
    
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const closeDrawer = () => {
        setDrawer(false)
    }

    return (
        <section id="gallery" className="main">
            <div>
                <button className="button-primary" onClick={()=> setDrawer(true)}>
                        <i className="fas fa-filter"></i> Filter
                </button>
                <h1>
                    Image Gallery
                </h1>
            </div>
            <div className="container">
                <div className="sidebar" style={drawer ? {transform: 'translateX(0)'} : null}>
                    <button className="close" onClick={closeDrawer}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="buttons">
                        <button 
                            className={`button ${showAll && 'active'}`} 
                            onClick={()=> handleAll()}
                        >
                            All
                        </button>
                        <button 
                            className={`button ${showBreeds && 'active'}`} 
                            onClick={()=> handleBreeds()}
                        >
                            Breeds
                        </button>
                        <button 
                            className={`button ${showSubBreeds && 'active'}`} 
                            onClick={()=> handleSubBreeds()}
                        >
                            Sub-Breeds
                        </button>
                    </div>
                    <SearchInput/>
                    <div className="breed-selected">
                        {breedSelected.length > 0 && breedSelected.map(item=> (
                            <button key={item}>
                                {capitalize(item)} 
                                <span onClick={(e)=> clearFilter(e)}><i className="fas fa-times-circle"></i></span>
                            </button>
                        ))}
                    </div>
                    <div className="list">
                        <ul>
                            {list.length === 0 ? all.map(item => (
                                <Sidebar  
                                    key={item} 
                                    item={item} 
                                />
                            )) : list.length > 0 && list.map(item => (
                                <Sidebar 
                                    key={item} 
                                    item={item} 
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {   loading ? <Loading/> : 
                    images.length === 0 && noResults ? <NoResults/> :
                    images.length === 0 && noResults === false ?  <Carousel/> : 
                    <Gallery/>
                }
            </div>
        </section>
    )
}

export default Main
