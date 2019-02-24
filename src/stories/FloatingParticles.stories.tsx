import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  FloatingParticles,
  ParticleSize
} from '../components/floating-particles/FloatingParticles';
import _ from 'lodash';

const particles = [
  'git.svg',
  'javascript.svg',
  'jest.svg',
  'less.svg',
  'lodash.svg',
  'node-sass.svg',
  'node.svg',
  'prettier.svg',
  'react-router.svg',
  'react.svg',
  'reactivex.svg',
  'redux-observable.svg',
  'redux.svg',
  'storybook.png',
  'stylus.svg',
  'typescript.png',
  'vue.svg'
].map(icon => ({
  path: `../../assets/icons/particles/${icon}`,
  size: ParticleSize.XL
}));

storiesOf('FloatingParticles', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ height: 500 }}>
      <FloatingParticles particles={object('particles', particles)} />
    </div>
  ));
