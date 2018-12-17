import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/header';

describe('Testing Header Component', () => {
    it('Check to see if the text is the header is same', () => {
      const wrapper = shallow(
        <Header />
      );
      expect(wrapper.text()).toEqual('Tour of Heros');
      //wrapper.unmount();
    });
});