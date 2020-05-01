import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from '../components/ErrorMessage';

configure({ adapter: new Adapter() });

describe('ErrorMessage component', () => {
  test('renders', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.exists()).toBe(true);
  });
});