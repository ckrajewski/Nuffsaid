import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageGrid from '../components/MessageGrid';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });
const message ={priority: 1, messages:'error message'};
const priorities =[{value:1,label:'Error'},{value:2,label:'Warning'}];
const setClear = jest.fn();
describe('MessageGrid component', () => {
  test('renders with default values', () => {
  	const tree = renderer.
    create(<MessageGrid message={message} priorities={priorities} setClear={setClear}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test new incoming message', () => {
    const wrapper = shallow(<MessageGrid message={message} priorities={priorities} setClear={setClear} />);
    const updatedMessage ={priority: 2, messages:'warning message'};
    wrapper.setProps({message:updatedMessage});
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});