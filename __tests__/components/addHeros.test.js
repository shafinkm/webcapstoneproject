import React from 'react';
import { mount, shallow } from 'enzyme';

import configureStore from 'redux-mock-store';
import { AddHero, mapStateToProps, mapFunctionToProps } from '../../src/components/addHeros';

import store from '../../src/store/store';

describe('AddHero Component', () => {
    let wrapper;
    // our mock function to replace the one provided by mapDispatchToProps
    const mockhandleAddNewUserFn = jest.fn();
    const mockhandleChangeFn = jest.fn();
   
     beforeEach(() => {
       // pass the mock function as the prop 
       wrapper = mount(<AddHero store={store} handleAddNewUser={mockhandleAddNewUserFn} newHeroValue="Safinali" handleChange={mockhandleChangeFn} />)
     });
  
    describe('When add button is clicked', () => {
        it('should call the mock function', () => {
         wrapper.find('button#add-hero').simulate('click')
         expect(mockhandleAddNewUserFn.mock.calls.length).toBe(1)
        });
    });

    describe('When value is added to the input', () => {
      it('should call the mock function', () => {
       wrapper.find('input#hero_input').simulate('change')
       expect(mockhandleChangeFn.mock.calls.length).toBe(1)
      });
    });

    describe('Testing map state to props', () => {
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
      it('should call the mock function', () => {
        expect(mapStateToProps(initialState)).toEqual(initialState);
      });
    });

    // it('checking function in map function to props', () => {
    //   const dispatch = jest.fn();
    //   const wrapper = mount(<AddHero />);
    //   const input = wrapper.find('input').text();
    //   console.log(input);

    //   // For the `mapDispatchToProps`, call it directly but pass in
    //   // a mock function and check the arguments passed in are as expected
    //   mapFunctionToProps(dispatch).handleChange();

    //   expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_NEW_HERO_VALUE'});
    // });

});