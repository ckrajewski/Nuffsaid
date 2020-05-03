import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageList from '../components/message-list';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('MessageList component', () => {
  test('renders', () => {
    const tree = renderer.create(<MessageList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});