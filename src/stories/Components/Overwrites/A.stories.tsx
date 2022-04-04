/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { A as ACompomnent } from '../../../app/components/A';

export default {
  title: 'Shared/Overwrites',
  component: ACompomnent,
} as ComponentMeta<typeof ACompomnent>;

const Template: ComponentStory<typeof ACompomnent> = args => (
  <ACompomnent> Random link </ACompomnent>
);

export const A = Template.bind({});
