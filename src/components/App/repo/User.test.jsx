import React from 'react';
import { shallow } from 'enzyme';
import User from './User.jsx';

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<User
      avatar_url="https://avatars0.githubusercontent.com/u/56773448?v=4"
      login="ezjim"
      location="Portland"
      following={0}
      html_url="https://github.com/ezjim"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
