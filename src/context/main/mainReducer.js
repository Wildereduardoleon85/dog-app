import { 
    SET_BREEDS,
    SET_SUBBREEDS,
    SET_ALL,
    SET_LOADING_ON,
    SET_LOADING_OFF,
    CLEAR_BREEDS_IMAGES,
    CLEAR_SUBBREEDS_IMAGES,
    SET_IMAGES,
    HANDLE_ALL,
    HANDLE_BREEDS,
    HANDLE_SUBBREEDS,
    CLEAR_LIST,
    FILTER_LIST,
    SET_BREED_SELECTED,
    CLEAR_FILTER
    } from '../types';


const mainReducer = (state, action) => {
    switch(action.type){
        case SET_BREEDS:
            return{
                ...state,
                breeds: action.payload
            };
        case SET_SUBBREEDS:
        return{
            ...state,
            subBreeds: action.payload
        };
        case SET_ALL:
        return{
            ...state,
            all: action.payload
        };
        case SET_LOADING_ON:
        return{
            ...state,
            loading: true
        };
        case SET_LOADING_OFF:
        return{
            ...state,
            loading: false
        };
        case CLEAR_BREEDS_IMAGES:
        return{
            ...state,
            images: (state.images.filter(item =>{
                return !item.includes(action.payload)
                }  
            )),
            breedSelected: state.breedSelected.filter(item=> {
                return item !== action.payload
            })
        };
        case CLEAR_SUBBREEDS_IMAGES:
        return{
            ...state,
            images: (state.images.filter(item =>{
                return !item.includes(action.payload.text + '-' + action.payload.subBreed)
                } 
            )),
            breedSelected: state.breedSelected.filter(item=> {
                return item !== action.payload.text + '-' + action.payload.subBreed
            })
        };
        case SET_IMAGES:
            if(state.images.length === 0 && action.payload.length === 0){
                return {
                    ...state,
                    noResults: true
                }
            }else{
                return {
                    ...state,
                    images: action.payload.concat(state.images),
                    noResults: false
                };
            }
        case HANDLE_ALL:
        return{
            ...state,
            list: state.all,
            showAll: true,
            showBreeds: false,
            showSubBreeds: false
        };
        case HANDLE_BREEDS:
        return{
            ...state,
            list: state.breeds,
            showAll: false,
            showBreeds: true,
            showSubBreeds: false
        };
        case HANDLE_SUBBREEDS:
        return{
            ...state,
            list: state.subBreeds,
            showAll: false,
            showBreeds: false,
            showSubBreeds: true
        };
        case CLEAR_LIST:
            if(state.showAll){
                return{
                    ...state,
                    list: state.all
                }
            }
            if(state.showBreeds){
                return{
                    ...state,
                    list: state.breeds
                }
            }
            if(state.showSubBreeds){
                return {
                    ...state,
                    list: state.subBreeds
                }
            }else{
                return state
            }
        case FILTER_LIST:
            if(state.list.length > 0){
                return {
                    ...state,
                    list: state.list.filter(item => item.includes(action.payload))
                }
            }
            if(state.list.length === 0){
                return {
                    ...state,
                    list: state.all.filter(item => item.includes(action.payload))
                }
            }else{
                return state
            }
        case SET_BREED_SELECTED:
            return{
                ...state,
                breedSelected: [action.payload, ...state.breedSelected]
            };
        case CLEAR_FILTER:
            return{
                ...state,
                breedSelected: state.breedSelected.filter(item=> item !== action.payload),
                images: (state.images.filter(item =>{
                    return !item.includes(action.payload)
                    } 
                )),
            };
        default:
            return  state;
    } 
}

export default mainReducer;