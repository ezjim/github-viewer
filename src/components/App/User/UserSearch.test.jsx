import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserSearch';

describe('UserInput component', () => {
  it('renders UserInput', () => {
    const wrapper = shallow(<UserInput 
      username="ezjim"
      onUserChange={() => {}}
      onUserSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
