import React from 'react';
import { mount, shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import { Heroes, mapStateToProps, mapFunctionToProps } from '../../src/components/heroes';

//import store from '../../src/store/store';

describe('Testing Heros component', () => {
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

    let wrapper;
    const mockhandleRemoveHeroFn = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Heroes handleRemoveHero={mockhandleRemoveHeroFn} herosList={initialState.herosList} />)
      });

    describe('Testing Heroes component to check', () => {
        it('contains an 10 on load <Navlink/> component', function () {
            expect(wrapper.find(NavLink)).toHaveLength(10);
        });
    });


    //TESTING HANDLE CLEAR SEARCH QUERY FUNCTION
    describe('Testing Heroes component to check', () => {
        it('handleChange function is called', function () {
            expect(mockhandleRemoveHeroFn.mock.calls.length).toBe(0)
        });
    });


    //   describe('When add button is clicked', () => {
    //     it('should call the mock function', () => {
    //         wrapper.find('button#add-hero').simulate('click')
    //         expect(mockhandleAddNewUserFn.mock.calls.length).toBe(1)
    //         });
    //     });

    // describe('When value is added to the input', () => {
    //     it('should call the handle change function', () => {
    //         wrapper.find('input#search-query').simulate('change')
    //         expect(mockhandleChangeFn.mock.calls.length).toBe(1)
    //     });
    // });

    // TESTING MAP STATE TO PROPS FUNCTION
    it('testing map state to props', () => {
        expect(mapStateToProps(initialState)).toEqual(initialState);
    });

    //  it('checking function in map function to props', () => {
    //   const dispatch = jest.fn();
    //   const wrapper = mount(<Dashboard />);
    //   const input = wrapper.find('input').text();

    //   // For the `mapDispatchToProps`, call it directly but pass in
    //   // a mock function and check the arguments passed in are as expected
    //   mapFunctionToProps(dispatch).handleChange();

    //   expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_NEW_HERO_VALUE'});
    // });
});