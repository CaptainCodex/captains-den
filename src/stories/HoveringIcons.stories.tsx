import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { HoveringIcons } from '../components/hovering-icons/HoveringIcons';
import '../App';
import _ from 'lodash';

const icons = [
  'git.svg',
  'git.svg',
  'git.svg',
  'git.svg',
  'git.svg',
  'git.svg',
  'git.svg'
].map(icon => ({
  path: `../../assets/icons/particles/${icon}`
}));

storiesOf('HoveringIcons', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ height: 3000 }}>
      <div
        style={{
          position: 'absolute',
          height: 500,
          width: 500,
          top: 1500,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto'
        }}
      >
        <HoveringIcons icons={object('particles', icons)} />
      </div>
    </div>
  ));
