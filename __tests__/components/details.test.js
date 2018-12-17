import React from 'react';
import { mount, shallow } from 'enzyme';

import configureStore from 'redux-mock-store';
import { Details, mapFunctionToProps, mapStateToProps } from '../../src/components/details';

//import store from '../../src/store/store';

describe('Details Component', () => {
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

    let wrapper, wrapper_shallow;
    // our mock function to replace the one provided by mapDispatchToProps
    const mockhandleUpdateHeroFn = jest.fn();
    const mockhandleLoadHeroNameFn = jest.fn();
    const mockhandleGoBackFn = jest.fn();
    const mockhandleChangeFn = jest.fn();
   
     beforeEach(() => {
       // pass the mock function as the prop 
       wrapper = mount(<Details handleChange={mockhandleChangeFn} handleUpdateHero={mockhandleUpdateHeroFn} handleLoadHeroName={mockhandleLoadHeroNameFn} handleGoBack={mockhandleGoBackFn} updatedHeroName={{name: "Safinali"}} id="12"/>)
       wrapper_shallow = shallow(<Details handleChange={mockhandleChangeFn} handleUpdateHero={mockhandleUpdateHeroFn} handleLoadHeroName={mockhandleLoadHeroNameFn} handleGoBack={mockhandleGoBackFn} updatedHeroName={{name: "Safinali"}} id="12"/>)
     
    });

     // TESTING MAP STATE TO PROPS FUNCTION
      it('testing map state to props', () => {
        expect(mapStateToProps(initialState)).toEqual(initialState);
      });

    //TESTING IF THE CORRECT NAME IS BEING DISPLAYED ON DETAILS PAGE WITH THE ID
    describe('When the Details component loads check if', () => {
        it('should displays the correct Hero name based on the id', () => {
          const expectedName = 'Safinali Details';
          expect(wrapper.find('h2').text()).toBe(expectedName);
        });
    });
     
    //TESTING TO CHECK IF THE SAVE BUTTON IS BEING CLICKED
    describe('When save button is clicked', () => {
        it('should call the mock function', () => {
         wrapper.find('button#save-hero').simulate('click')
         expect(mockhandleUpdateHeroFn.mock.calls.length).toBe(1)
        });
    });

    //TESTING TO CHECK IF THE BACK BUTTON IS BEING CLICKED
    describe('When back button is clicked', () => {
        it('should call the mock function', () => {
          wrapper.find('button#back-button').simulate('click')
          expect(mockhandleGoBackFn.mock.calls.length).toBe(1)
        });
    });

    //TESTING TO CHECK IF THE HANDLE CHANGE IS BEING CALLED WHEN INPUT VALUE IS BEING CHANGED
    describe('When user changes the name in the input field', () => {
        it('should call the handleChange mock function', () => {
          const dispatch = jest.fn();
          mapFunctionToProps(dispatch).handleUpdateHero({target:{value:"Safinali"}});
          expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UPDATE_HERO_LIST'});
        });
    });

    //TESTING TO CHECK IF THE HANDLE CHANGE IS BEING CALLED WHEN INPUT VALUE IS BEING CHANGED
    describe('When user changes the name in the input field', () => {
        it('should call the handleChange mock function', () => {
          //wrapper_shallow.find('input#update_hero').props().onChange(eventObject('John'));
          const dispatch = jest.fn();
          mapFunctionToProps(dispatch).handleChange({ target: { value: "John" } },"12");
          expect(dispatch.mock.calls[0][0]).toEqual({ payload: {"id": 12, "name": "John"}, type: 'SET_HERO_NAME'});
        });
    });

    //TESTING TO CHECK IF THE HANDLE LOAD HERO NAME IS BEING CALLED ON PAGE LOAD
    describe('When the component loads', () => {
        it('should call the handleLoadHeroName mock function', () => {
          const dispatch = jest.fn();
          mapFunctionToProps(dispatch).handleLoadHeroName("12");
          expect(dispatch.mock.calls[0][0]).toEqual({ payload: 12, type: 'LOAD_HERO_NAME'});
        });
    });
  });