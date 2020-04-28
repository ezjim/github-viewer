  
import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repo />);
    expect(wrapper).toMatchSnapshot();
  });
});
