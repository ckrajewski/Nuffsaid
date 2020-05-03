import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColumnTitle from '../components/ColumnTitle';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('ColumnTitle component', () => {
  test('renders', () => {
  	const priorityLabel = 'Error';
  	const priorityValue = 1;
  	const messageCount = 1;
    const tree = renderer.create(<ColumnTitle priorityLabel={priorityLabel} priorityValue={priorityValue} messageCount={messageCount} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});