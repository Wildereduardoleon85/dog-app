import React, {useReducer} from 'react';
import axios from 'axios';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { 
    SET_BREEDS,
    SET_SUBBREEDS,
    SET_ALL,
    SET_LOADING_ON,
    SET_LOADING_OFF,
    SET_IMAGES,
    CLEAR_BREEDS_IMAGES,
    CLEAR_SUBBREEDS_IMAGES,
    HANDLE_ALL,
    HANDLE_BREEDS,
    HANDLE_SUBBREEDS,
    CLEAR_LIST,
    FILTER_LIST
    } from '../types';

const MainState = props => {
    const initialState = {
        breeds: [],
        subBreeds: [],
        all: [],
        list: [],
        loading: true,
        images: [],
        showAll: true,
        showBreeds: false,
        showSubBreeds: false
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    // Fetch Data
    const fetchData = async () => {
        dispatch({type: SET_LOADING_ON})
        const res = await axios.get('https://dog.ceo/api/breeds/list/all')
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

        dispatch({type: SET_SUBBREEDS, payload: subBreeds})
        dispatch({type: SET_BREEDS, payload: breeds})
        dispatch({type: SET_ALL, payload: breeds.concat(subBreeds).sort(sortByLetter)})
        dispatch({type: SET_LOADING_OFF})
    };

    // Handle Checkbox input filters
    const handleChange = async(e) => {
        const text = e.target.parentElement.textContent.toLowerCase().split('-')[0]
        const subBreed = e.target.parentElement.textContent.toLowerCase().split('-')[1]
        if(e.target.checked === true && subBreed){
            dispatch({type: SET_LOADING_ON})
            const res = await axios.get(`https://dog.ceo/api/breed/${text}/images`)
            const fetchedData = res.data.message
            const filtered = fetchedData.filter(item=> {
                return item.includes(text + '-' + subBreed)
            })
            dispatch({type: SET_IMAGES, payload: filtered})
            dispatch({type: SET_LOADING_OFF})
        }
        if(e.target.checked === true && !subBreed){
            dispatch({type: SET_LOADING_ON})
            const res = await axios.get(`https://dog.ceo/api/breed/${text}/images`)
            const fetchedData = res.data.message
            const filtered = fetchedData.filter(item=> {
                return item.split('/')[4] === text
            })
            dispatch({type: SET_IMAGES, payload: filtered})
            dispatch({type: SET_LOADING_OFF})
        }
        if(e.target.checked === false && !subBreed){
            dispatch({type: CLEAR_BREEDS_IMAGES, payload: text})
        } 
        if(e.target.checked === false && subBreed){
            dispatch({
                type: CLEAR_SUBBREEDS_IMAGES, 
                payload: {text: text, subBreed: subBreed}})
        } 
    }

    // Handle filter buttons
    const handleAll = () => {
        dispatch({type: HANDLE_ALL})
    }

    const handleBreeds = () => {
        dispatch({type: HANDLE_BREEDS})
    }

    const handleSubBreeds = () => {
        dispatch({type: HANDLE_SUBBREEDS})
    }

    // Clear Breeds List
    const clearList = () => {
        dispatch({type: CLEAR_LIST})
    }


    // Handle filter typing
    const handleSearch = (e) => {
        const text = e.target.value
        if(text === ''){
            clearList()
        }
        dispatch({type: FILTER_LIST, payload: text})
    }

    return (
        <MainContext.Provider 
            value={{
                breeds: state.breeds,
                subBreeds: state.subBreeds,
                all: state.all,
                list: state.list,
                loading: state.loading,
                fetchData,
                handleChange,
                images: state.images,
                showAll: state.showAll,
                showBreeds: state.showBreeds,
                showSubBreeds: state.showSubBreeds,
                handleAll,
                handleBreeds,
                handleSubBreeds,
                clearList,
                handleSearch
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
};

export default MainState;