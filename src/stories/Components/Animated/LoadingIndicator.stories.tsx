import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { LoadingIndicator as Component } from '../../../app/components/LoadingIndicator';

export default {
  title: 'Animated/Loading indicator',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
);

export const LoadingIndicatorBig = Template.bind({});
LoadingIndicatorBig.args = {
  small: false,
};

export const LoadingIndicatorSmall = Template.bind({});
LoadingIndicatorSmall.args = {
  small: true,
};
