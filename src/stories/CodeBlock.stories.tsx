import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { CodeBlock } from '../components/code-block/CodeBlock';

import _ from 'lodash';

const code = `import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { CodeBlock } from '../components/code-block/CodeBlock';
import '../assets/global.scss';
import _ from 'lodash';

const code = 'the code for this story';

storiesOf('CodeBlock', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <CodeBlock code={object('code', code)} />
    </div>
  ));`;

storiesOf('CodeBlock', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <CodeBlock code={code} />
    </div>
  ));
