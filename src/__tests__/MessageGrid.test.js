import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageGrid from '../components/MessageGrid';

configure({ adapter: new Adapter() });
const message =[{priority: 1, messages:'test'}];
const priorities =[{value:1,label:'Error'}];
describe('MessageGrid component', () => {
  test('renders', () => {
    const wrapper = shallow(<MessageGrid message={message} priorities={priorities} />);
    expect(wrapper.exists()).toBe(true);
  });
});