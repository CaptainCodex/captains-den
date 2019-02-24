import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import {
  OutlineButton,
  Color
} from '../components/outline-button/OutlineButton';

storiesOf('OutlineButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ padding: 10 }}>
      <OutlineButton onClick={action('Clicked')}>
        Register Account
      </OutlineButton>
      <div style={{ width: 10, display: 'inline-block' }} />
      <OutlineButton color={Color.PURPLE} onClick={action('Clicked')}>
        Register Account
      </OutlineButton>
    </div>
  ))
  .add('rounded', () => (
    <div style={{ padding: 10 }}>
      <OutlineButton rounded={true} onClick={action('Clicked')}>
        Register Account
      </OutlineButton>
      <div style={{ width: 10, display: 'inline-block' }} />
      <OutlineButton
        rounded={true}
        color={Color.PURPLE}
        onClick={action('Clicked')}
      >
        Register Account
      </OutlineButton>
    </div>
  ));
