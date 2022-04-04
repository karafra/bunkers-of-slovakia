/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavBar as Component } from '../../../app/components/NavBar';

export default {
  title: 'Navigation/Navbar',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = _ => <Component />;

export const NavBar = Template.bind({});
