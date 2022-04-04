import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '../../../app/components/Map/PickedTooltip';

const objects = [
  {
    name: 'Name',
    description: 'Description',
  },
  {
    name: 'Name2',
    description: 'Description2',
  },
  {
    name: 'Name3',
    description: 'Description3',
  },
];

export default {
  title: 'Interactive/Map/Tooltips/Picked',
  component: Component,
  args: {
    x: 0,
    y: 0,
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
);

export const PickedTooltipWithDescriptions = Template.bind({});
PickedTooltipWithDescriptions.args = {
  objects,
};

export const PickedTooltipWithoutDescriptions = Template.bind({});
PickedTooltipWithoutDescriptions.args = {
  objects: [
    {
      name: 'name1',
    },

    {
      name: 'name2',
    },
    {
      name: 'name3',
    },
  ],
};

export const PickedTooltipMixed = Template.bind({});
PickedTooltipMixed.args = {
  objects: [
    {
      name: 'Name',
      description: 'Description',
    },
    {
      name: 'Name2',
    },
    {
      name: 'Name3',
      description: 'Description3',
    },
    {
      name: 'Name4',
    },
  ],
};
