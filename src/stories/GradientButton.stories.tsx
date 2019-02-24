import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { GradientButton } from '../components/gradient-button/GradientButton';

storiesOf('GradientButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ padding: 10 }}>
      <GradientButton onClick={action('Clicked')}>
        Register Account
      </GradientButton>
    </div>
  ))
  .add('rounded', () => (
    <div style={{ padding: 10 }}>
      <GradientButton rounded={true} onClick={action('Clicked')}>
        Register Account
      </GradientButton>
    </div>
  ));
