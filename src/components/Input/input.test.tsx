import * as React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('Should render correctly', () => {
    const component = shallow(<Input />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly enabled', () => {
    const component = shallow(<Input disabled={false} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly disabled', () => {
    const component = shallow(<Input disabled />);

    expect(component).toMatchSnapshot();
  });
});