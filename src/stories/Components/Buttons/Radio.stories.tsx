import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Radio as RadioComponent } from '../../../app/components/Radio';


export default {
    title: "Shared/Buttons",
    component: RadioComponent,
    args: {
        id: "id",
        label: "label"
    }
} as ComponentMeta<typeof RadioComponent>;

const Template: ComponentStory<typeof RadioComponent> = (args) => <RadioComponent {...args} />;

export const Radio = Template.bind({});
