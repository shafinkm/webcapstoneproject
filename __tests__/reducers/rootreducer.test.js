import React from 'react';
import { mount } from 'enzyme';
import rootReducer from '../../src/reducer/rootreducer';
import { AddHero } from '../../src/components/addHeros';

describe('root Reducer', () => {
    test('Test Remove Hero', () => {

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
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'REMOVE_HERO',
            payload: 20
        };
    
        const newValue = {
            ...initialState,
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
          ]
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Test Update Hero Name', () => {

        const initialState = { 
            herosList: [
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
          ],
          updatedHeroName: { id: 20, name: "Safinali" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'UPDATE_HERO_LIST'
        };
    
        const newValue = {
            ...initialState,
            herosList: [
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Safinali' }
          ]
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Set Hero Name', () => {
        const action = {
            type: 'SET_HERO_NAME',
            payload: 'Test Name'
        };
    
        const newValue = {
            "newHeroValue": "", 
            "updatedHeroName": "Test Name"
        };
    
        expect(rootReducer(undefined, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Adding a new hero in the list', () => {
        const action = {
            type: 'ADD_HERO',
        };
    
        const initialState = { 
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
          ],
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "Safinali",
          filteredHeroList: [],
          searchQuery: ""
        };

        const newValue = {
            ...initialState,
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Safinali' }
          ],
          newHeroValue: "",
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Searching heros from the list', () => {
    
        const initialState = { 
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
          ],
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'FILTER_HERO_LIST',
            payload: "nar"
        };

        const newValue = {
            ...initialState,
            filteredHeroList: [
                { id: 12, name: 'Narco' }
          ],
          searchQuery: "nar"
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Searching heros from the list', () => {
    
        const initialState = { 
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
          ],
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'CLEAR_SEARCH_QUERY'
        };

        const newValue = {
            ...initialState,
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Searching heros from the list', () => {
    
        const initialState = { 
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
          ],
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'LOAD_HERO_NAME',
            payload: 13
        };

        const newValue = {
            ...initialState,
            updatedHeroName: { id: 13, name: "Bombasto" },
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

describe('root Reducer', () => {
    test('Resetting the update Value', () => {
    
        const initialState = { 
            herosList: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
          ],
          updatedHeroName: { id: "", name: "" },
          newHeroValue: "",
          filteredHeroList: [],
          searchQuery: ""
        };

        const action = {
            type: 'RESET_UPDATE_VALUE'
        };

        const newValue = {
            ...initialState
        };
    
        expect(rootReducer(initialState, action)).toEqual(newValue);
    });
});

// describe('root Reducer', () => {
//     test('Adding new Hero Value', () => {
    
//         const initialState = { 
//             herosList: [
//                 { id: 11, name: 'Mr. Nice' },
//                 { id: 12, name: 'Narco' },
//                 { id: 13, name: 'Bombasto' },
//                 { id: 14, name: 'Celeritas' },
//           ],
//           updatedHeroName: { id: "", name: "" },
//           newHeroValue: "",
//           filteredHeroList: [],
//           searchQuery: ""
//         };

//         const action = {
//             type: 'ADD_NEW_HERO_VALUE',
//             payload: "Rocky"
//         };

//         const newValue = {
//             ...initialState,
//             newHeroValue: "Rocky"
//         };

//         const warpper = mount(<AddHero />); 
//         warpper.find('input').simulate('change', { target : { value: "Rocky" } });
    
//         expect(rootReducer(initialState, action)).toEqual(newValue);
//     });
// });