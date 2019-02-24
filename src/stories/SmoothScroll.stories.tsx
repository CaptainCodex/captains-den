import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';

import '../components/shared/SmoothScroll';

storiesOf('SmoothScroll', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ width: 400, paddingLeft: 20 }}>
      {_.times(500, index => (
        <div>That is so smooth. {index}</div>
      ))}
    </div>
  ));
