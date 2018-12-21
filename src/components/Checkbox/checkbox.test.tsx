import * as React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';

describe('TextInput', () => {
  it('Should render correctly', () => {
    const component = shallow(<CheckBox />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly enabled', () => {
    const component = shallow(<CheckBox disabled={false} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly disabled', () => {
    const component = shallow(<CheckBox disabled />);

    expect(component).toMatchSnapshot();
  });
});