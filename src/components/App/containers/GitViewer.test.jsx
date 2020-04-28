import React from 'react';
import { shallow } from 'enzyme';
import GitViewer from './GitViewer';

describe('UserEnter component', () => {
  it('renders UserEnter', () => {
    const wrapper = shallow(<GitViewer 
      username="cficht"
      onUserChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
