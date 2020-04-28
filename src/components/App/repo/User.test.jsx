  
import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });
});
