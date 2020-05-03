import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from '../components/ErrorMessage';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('ErrorMessage component', () => {
  test('renders with error', () => {
    const message = 'hello';
    const priority = 1;
    const tree = renderer
    .create(<ErrorMessage message={message} priority={priority} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('does not renders without error message', () => {
    const message = 'hello';
    const priority = 2;
    const tree = renderer
    .create(<ErrorMessage message={message} priority={priority} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});