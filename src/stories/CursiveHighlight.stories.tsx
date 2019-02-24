import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { CursiveHighlight } from '../components/cursive-highlight/CursiveHighlight';

storiesOf('CursiveHighlight', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ backgroundColor: '#6a42c1' }}>
      <CursiveHighlight content="Enjoy your free offer today!" />
    </div>
  ));
