import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Column from '../components/Column';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const priority = [{value:1, label:'Error'}];
const messages =[{message:'error message'},{message:'another error message'}];
describe('Column component', () => {
  test('renders error messages', () => {
    const tree = renderer.create(<Column priority={priority} messages={messages} />);
    expect(tree).toMatchSnapshot();
  });
});