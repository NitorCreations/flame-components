import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('Normal', () => (
      <TextInput placeholder="Text input" />
    )
  )
  .add('Disabled', () => (
      <TextInput placeholder="Disabled input" disabled />
    )
  );