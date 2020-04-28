import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo 
      name="ezjim"
      html_url="https://github.com/ezjim"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
