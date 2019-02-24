import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Accordion } from '../components/accordion/Accordion';

const rows = [
  {
    headline: 'Lorem ipsum dolor sit amet',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
  ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores
  atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,
  sint!`
  },
  {
    headline: 'Lorem ipsum dolor sit amet',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
  ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores
  atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,
  sint!`
  },
  {
    headline: 'Lorem ipsum dolor sit amet',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
  ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores
  atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,
  sint!`
  },
  {
    headline: 'Lorem ipsum dolor sit amet',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
  ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores
  atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,
  sint!`
  }
];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ padding: 10, width: 400, margin: 'auto' }}>
      <Accordion rows={rows} />
      <div style={{ width: 10, display: 'inline-block' }} />
      <Accordion rows={rows} single={false} />
    </div>
  ));
