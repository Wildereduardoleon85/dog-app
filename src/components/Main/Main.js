import React, { useEffect, useContext } from 'react';
import MainContext from '../../context/main/mainContext';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import Loading from '../layout/Loading/Loading';
import SearchInput from '../SearchInput/SearchInput';
import './main.scss';

const Main = () => {
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
        showSubBreeds
    } = mainContext
    
    
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <section className="main">
            <h1>Dogs Breeds</h1>
            <div className="container">
                <div className="sidebar">
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
                {loading ? <Loading/> : <Gallery/>}
            </div>
        </section>
    )
}

export default Main
