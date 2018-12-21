import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checked: false
});

storiesOf('Checkbox', module)
  .add('Normal', () => (
    <div>
      <State store={store}>
        <Checkbox onChange={() => store.set({ checked: !store.get('checked') })} checked={store.get('checked')}>
          Checkbox
        </Checkbox>
      </State>
    </div>
  ))
  .add('Disabled', () => (
      <Checkbox disabled checked>
        Disabled checkbox
      </Checkbox>
    )
  );