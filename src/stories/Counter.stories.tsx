import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Counter } from '../components/counter/Counter';

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      Scroll down for an animated counter
      <div style={{ paddingTop: 1000, height: 2000, fontSize: 72 }}>
        <Counter count={5000} duration={5000} />
      </div>
    </div>
  ));
