import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Normal', () => (
      <Input placeholder="input" />
    )
  )
  .add('Disabled', () => (
      <Input placeholder="input" disabled />
    )
  );