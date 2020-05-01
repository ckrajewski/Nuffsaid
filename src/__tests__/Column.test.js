import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Column from '../components/Column';

configure({ adapter: new Adapter() });

const priority = [{value:1, label:'Error'}];
const messages =[{priority: 1, messages:'test'}];
describe('Column component', () => {
  test('renders', () => {
    const wrapper = shallow(<Column priority={priority} messages={messages} />);
    expect(wrapper.exists()).toBe(true);
  });
});