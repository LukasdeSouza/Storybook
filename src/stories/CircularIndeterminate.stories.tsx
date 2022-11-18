import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CircularIndeterminate } from '../components/CircularProgress/CircularIndeterminate';

export default {
  title: 'Components/CircularProgress/CircularIndeterminate',
  component: CircularIndeterminate,
} as ComponentMeta<typeof CircularIndeterminate>;

const Template: ComponentStory<typeof CircularIndeterminate> = (args) => <CircularIndeterminate {...args} />;

export const Default = Template.bind({});
Default.args = {
}


