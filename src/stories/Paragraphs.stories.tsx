import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { ParagraphStyle1 } from '../components/paragraphs/ParagraphStyle1';

storiesOf('Paragraphs', module)
  .addDecorator(withKnobs)
  .add('Style 1', () => (
    <div style={{ width: 400, paddingLeft: 20 }}>
      <ParagraphStyle1
        tagline="some tagline"
        headline="Paragraph Style 1"
        subheader="Some subheader."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores
          atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,
          sint!"
      />
    </div>
  ));
