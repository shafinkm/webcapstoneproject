import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { NavLink } from 'react-router-dom';

import { Dashboard, mapStateToProps, mapFunctionToProps } from '../../src/components/dashboard';

import store from '../../src/store/store';

describe('Testing dashboard component', () => {
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
    const mockhandlehandleClearSearchQueryFn = jest.fn();
    const mockhandleChangeFn = jest.fn();

    beforeEach(() => {
        // pass the mock function as the prop 
        wrapper = shallow(<Dashboard store={store} handleChange={mockhandleChangeFn} handleClearSearchQuery={mockhandlehandleClearSearchQueryFn} herosList={initialState.herosList} />)
      });

    describe('Testing Dashboard component to check', () => {
        it('contains an <Navlink/> component', function () {
            expect(wrapper.find(NavLink)).toHaveLength(5);
        });
    });

    // TESTING TO SEE IF ONLY 5 HERO NAMES ARE DISPLAYED IN THE DASHBOARD
    describe('Testing Dashboard component to check if', () => {
        it('contains hero names', function () {
            //const texts = wrapper.find('.badge-secondary').map(node => node.text());
            const Hero_Name_List_count = 5;
            expect(wrapper.find('.badge-secondary')).toHaveLength(Hero_Name_List_count);
        });
    });

    //TESTING HANDLE CLEAR SEARCH QUERY FUNCTION
    describe('Testing Dashboard component to check', () => {
        it('handleClearSearchQuery function is called', function () {
            //wrapper.find('input').simulate('change', { target: { value: 'Narco' } });
            expect(mockhandlehandleClearSearchQueryFn.mock.calls.length).toBe(3)
        });
    });

    //TESTING HANDLE CHANGE FUNCTION
    describe('Testing Dashboard component to check', () => {
        it('handleChange function is called', function () {
            wrapper.find('input').simulate('change', { target: { value: 'Narco' } });
            expect(mockhandleChangeFn.mock.calls.length).toBe(1)
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