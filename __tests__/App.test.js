import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../src/App';
import Dashboard from '../src/components/dashboard';
import Heroes from '../src/components/heroes';
import Details from '../src/components/details';

describe('Testing App Componenet', () => {

    it('renders correct routes "/"', () => {
        const wrapper = shallow(<App />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
        
        expect(pathMap['/']).toBe(Dashboard);
    });

    it('renders correct routes "/dashboard"', () => {
        const wrapper = shallow(<App />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
        
        expect(pathMap['/dashboard']).toBe(Dashboard);
    });

    it('renders correct routes "/heroes"', () => {
        const wrapper = shallow(<App />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
        
        expect(pathMap['/heroes']).toBe(Heroes);
    });
});