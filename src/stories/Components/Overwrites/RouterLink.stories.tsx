/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link as Component } from '../../../app/components/Link';

export default {
  title: 'Shared/Overwrites',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = args => (
  <BrowserRouter>
    <Component {...args}> Router link </Component>
  </BrowserRouter>
);
export const RouterLink = Template.bind({});
