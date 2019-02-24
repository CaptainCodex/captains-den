import React, { FC } from 'react';
import { HelloWorldConnected as HelloWorld } from '../connected/HelloWorldConnected';
import { HoveringIcons } from '../components/hovering-icons/HoveringIcons';

const icons = [
  'git.svg',
  'javascript.svg',
  'jest.svg',
  'less.svg',
  'lodash.svg'
];

const particles = icons.map(icon => ({
  path: `../../assets/icons/particles/${icon}`
}));

export const Home: FC = () => (
  <div style={{ height: 600 }}>
    <HoveringIcons icons={particles} />
  </div>
);
