import React from 'react';
import { mount, shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import { SearchList, mapStateToProps } from '../../src/components/searchlist';

describe('Testing SearchList component', () => {
    let wrapper;
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
        filteredHeroList: [
            { id: 11, name: 'Mr. Nice' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' }
        ],
        searchQuery: ""
    };

    beforeEach(() => {
        // pass the mock function as the prop 
        wrapper = shallow(<SearchList filteredHeroList={initialState.filteredHeroList}/>)
      });

    // TESTING MAP STATE TO PROPS FUNCTION
    it('testing map state to props', () => {
        expect(mapStateToProps(initialState)).toEqual(initialState);
    });
    
    describe('Testing SearchList component to check', () => {
        it('contains an <Navlink/> component', function () {
            expect(wrapper.find(NavLink)).toHaveLength(3);
        });
    });

});