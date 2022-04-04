import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from "../../../app/components/Map/HoverTooltip";


export default {
    title: "Interactive/Map/Tooltips/Hover",
    component: Component,
    args: {
        x: 0,
        y: 0,
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => 
        <Component {...args}/>

export const HoverTooltipCluster = Template.bind({});
HoverTooltipCluster.args = {
    cluster: true,
    count: 10,
};

export const HoverTooltipSingle = Template.bind({});
HoverTooltipSingle.args = {
    name: "Bunker name",
    description: "Bunker description",
}

export const HoverTooltipSingleWithoutDescription =  Template.bind({});
HoverTooltipSingleWithoutDescription.args = {
    name: "Bunker name"
}
