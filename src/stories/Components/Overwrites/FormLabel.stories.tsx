/* istanbul ignore file */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormLabel as FormLabelComponent } from '../../../app/components/FormLabel';

export default {
  title: 'Shared/Overwrites',
  component: FormLabelComponent,
} as ComponentMeta<typeof FormLabelComponent>;

const Template: ComponentStory<typeof FormLabelComponent> = args => (
  <FormLabelComponent {...args}> Label </FormLabelComponent>
);

export const FormLabel = Template.bind({});
