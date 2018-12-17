import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../../src/components/navigation';

describe("Testing Navigation Component", () => {
    it('Check if both Dashboard tab is present', () => {
        const wrapper = shallow(
            <Navigation />
        );
        expect(wrapper.find('li'));
    });
});