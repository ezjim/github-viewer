import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const repos = [
      {
        id: 233723653,
        name: 'about-me',
        html_url: 'https://github.com/ezjim/about-me'
      },
      {
        id: 236626883,
        name: 'bus-mall',
        html_url: 'https://github.com/ezjim/bus-mall'
      }
    ];
    const wrapper = shallow(<Repos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
