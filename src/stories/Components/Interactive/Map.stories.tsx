/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Component from '../../../app/components/Map/Map';

export default {
  title: 'Interactive/Map',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = _ => <Component />;

export const Map = Template.bind({});
