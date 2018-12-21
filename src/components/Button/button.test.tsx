import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('Should render correctly', () => {
    const component = shallow(<Button onClick={() => null} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be correctly enabled', () => {
    const component = shallow(<Button onClick={() => null} disabled={false} />);

    expect(component).toMatchSnapshot();
  });
  
  it('Should be correctly disabled', () => {
    const component = shallow(<Button onClick={() => null} disabled />);

    expect(component).toMatchSnapshot();
  });
});