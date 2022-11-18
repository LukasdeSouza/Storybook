import React from 'react';
import TypographyDefault from '../components/Typography/TypographyDefault';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: 'Components/Typography',
  component: TypographyDefault,
} as ComponentMeta<typeof TypographyDefault>;

const Template: ComponentStory<typeof TypographyDefault> = (args) => <TypographyDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Texto Exemplo',
  variant: 'h4'
}


