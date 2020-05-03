import React from 'react';
import { messageThemes } from '../utils';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../components/Message';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const priorityThemeTest = (priority) => {
	const message = 'hello';
    const tree = renderer.create(<Message message={message} priority={priority} />).toJSON();
    expect(tree).toMatchSnapshot();
}

describe('Message component', () => {
  test('renders', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.exists()).toBe(true);
  });
  test('renders correct message', () => {
  	const message = 'hello';
    const tree = renderer
    .create(<Message message={message} priority={1} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correct error message theme', () => {
  	const priority = 1;
  	priorityThemeTest(priority);
  });
  test('renders correct warning message theme', () => {
  	const priority = 2;
  	priorityThemeTest(priority);
  });
  test('renders correct info message theme', () => {
  	const priority = 3;
  	priorityThemeTest(priority);
  });
 });