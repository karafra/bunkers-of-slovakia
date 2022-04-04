import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { FormLabel as FormLabelComponent } from '../../../app/components/FormLabel';



export default {
    title: "Shared/Overwrites",
    component: FormLabelComponent
} as ComponentMeta<typeof FormLabelComponent>;

const Template: ComponentStory<typeof FormLabelComponent> = (args) => 
    <FormLabelComponent {...args} > Label </FormLabelComponent>;

export const FormLabel = Template.bind({});
