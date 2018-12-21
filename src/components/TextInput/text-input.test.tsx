import * as React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('Should render correctly', () => {
    const component = shallow(<TextInput />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly enabled', () => {
    const component = shallow(<TextInput disabled={false} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly disabled', () => {
    const component = shallow(<TextInput disabled />);

    expect(component).toMatchSnapshot();
  });

  it('Should render label', () => {
    const component = shallow(<TextInput label="label" />);

    expect(component).toMatchSnapshot();
  });
});