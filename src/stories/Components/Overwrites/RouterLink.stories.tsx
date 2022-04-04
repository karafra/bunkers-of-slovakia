import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Link as Component } from '../../../app/components/Link';
import { BrowserRouter } from 'react-router-dom';

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
