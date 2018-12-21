import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonTheme } from './Button';

storiesOf('Button', module)
  .add('Primary', () => (
      <Button onClick={action('clicked')} theme={ButtonTheme.primary}>
        Primary button
      </Button>
    )
  )
  .add('Secondary', () => (
      <Button onClick={action('clicked')} theme={ButtonTheme.secondary}>
        Secondary button
      </Button>
    )
  )
  .add('Disabled', () => (
      <Button onClick={action('clicked')} disabled>
        Disabled button
      </Button>
    )
  );