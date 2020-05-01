import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../components/Message';

configure({ adapter: new Adapter() });

describe('Message component', () => {
  test('renders', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.exists()).toBe(true);
  });
 });