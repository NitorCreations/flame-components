import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('Should be correctly disabled', () => {
    const component = shallow(<Button onClick={() => null} disabled />);

    expect(component.find('button').is('[disabled]')).toBeTruthy();
  });
});