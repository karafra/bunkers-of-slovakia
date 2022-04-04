import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo as Component } from '../../../app/components/NavBar/Logo';

export default {
    title: "Navigation/Logo",
    component: Component
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (_) => 
        <Component />

export const Logo = Template.bind({});
