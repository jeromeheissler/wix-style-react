import * as React from 'react';
import { Tooltip } from '..';
import * as TooltipSource from '!raw-loader!../Tooltip.tsx';

const childrenExamples = [
  { label: 'Simple text', value: <span>Hover me for a tooltip!</span> },
];

const contentExamples = [{ label: 'Simple text', value: 'Hello World' }];

export default {
  category: 'Components',
  storyName: 'Tooltip',
  component: Tooltip,
  source: TooltipSource,
  componentPath: '../Tooltip.tsx',
  componentProps: {
    'data-hook': 'story-tooltip',
    content: contentExamples[0].value,
    children: childrenExamples[0].value,
    placement: 'top',
  },

  exampleProps: {
    children: childrenExamples,
    content: contentExamples,
    placement: [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
  },
};
