import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColumnTitle from '../components/ColumnTitle';

configure({ adapter: new Adapter() });

describe('ColumnTitle component', () => {
  test('renders', () => {
    const wrapper = shallow(<ColumnTitle />);
    expect(wrapper.exists()).toBe(true);
  });
});