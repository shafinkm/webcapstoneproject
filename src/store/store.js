/** IMPORTING REDUX MODULE */
import { createStore } from 'redux';

/** IMPORTING ROOT REDUCER */
import rootReducer from '../reducer/rootreducer';

/** INITIAL STATE */
const initialState = { 
    herosList: [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
  ],
  filteredHeroList: []
};

/** CREATING STORE */
const store = createStore(
    rootReducer, 
    initialState, 
    window.devToolsExtension && window.devToolsExtension()
);

export default store;