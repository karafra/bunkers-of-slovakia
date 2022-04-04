/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Logo as Component } from '../../../app/components/NavBar/Logo';

export default {
  title: 'Navigation/Logo',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = _ => <Component />;

export const Logo = Template.bind({});
