import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TypedMessage } from '../components/typed-message/TypedMessage';
import _ from 'lodash';

storiesOf('TypedMessage', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <TypedMessage
        messages={object('messages', [
          'So...this is a typed message.',
          'It changes.',
          'What can you do with this?'
        ])}
        shuffle={true}
        loop={true}
      />
    </div>
  ));
