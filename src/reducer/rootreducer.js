// import { combineReducers } from  'redux';

// import ActionReducer from './actionreducer';

// const rootReducer = combineReducers({

//     action: ActionReducer

// });

// export default rootReducer;

const rootReducer = (state, action) => {
    switch(action.type) {
        case "ADD_HERO":
            if(state.newHeroValue !== ""){
                const newID =  (state.herosList.length === 0)? 11 : state.herosList[state.herosList.length - 1].id + 1;
                const newHero = {
                    id : newID,
                    name: state.newHeroValue
                }
                const newArray = [...state.herosList];
                newArray.push(newHero);
                state = {
                    ...state,
                    herosList : newArray,
                    newHeroValue: ""
                }
            }
            break;
        case "ADD_NEW_HERO_VALUE":
            state = {
                ...state,
                newHeroValue: action.payload.newHeroValue
            }
            break;
        case "REMOVE_HERO":
            const newHeroList = state.herosList.filter(objHero => objHero.id !== action.payload.id);
            state = {
                ...state,
                herosList : newHeroList
            };
            break;
        case "UPDATE_HERO_LIST":
            const objIndex = state.herosList.findIndex(objHero => objHero.id === state.updatedHeroName.id);
            let newList = [...state.herosList];
            newList[objIndex] = state.updatedHeroName;
            state = {
                ...state,
                herosList: newList
            };
            break;
        case "SET_HERO_NAME":
            state = {
                ...state,
                updatedHeroName : action.payload,
                newHeroValue: ""
            }
            break;
        case "LOAD_HERO_NAME": 
            const ArrHero = state.herosList.filter(objHero => objHero.id === action.payload);
            const newObj = {
                id: action.payload,
                name: ArrHero[0].name
            }
            state = {
                ...state,
                updatedHeroName: newObj
            }
            break;
        case "FILTER_HERO_LIST":
            if(state.herosList.length > 0){
                const filteredHero = performSearch(state.herosList, action.payload);
                state = {
                    ...state,
                    searchQuery: action.payload,
                    filteredHeroList: filteredHero
                }
            }
            break;
        default:
            state = {
                ...state
            };
    }
    return state;
}

// SEARCH FUNCTION
const performSearch = (arrHeroList, queryString) => {

    return arrHeroList.filter(objHero => objHero.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
   
}

export default rootReducer;