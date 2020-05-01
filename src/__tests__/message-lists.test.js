import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageList from '../components/message-list';

configure({ adapter: new Adapter() });

describe('MessageList component', () => {
  test('renders', () => {
    const wrapper = shallow(<MessageList />);
    expect(wrapper.exists()).toBe(true);
  });
});