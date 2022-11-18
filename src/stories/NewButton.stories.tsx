import React from 'react';
import { NewButton } from '../components/NewButton/NewButton';
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
  title: 'Components/Button/NewButton',
  component: NewButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => <NewButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Botão Teste',
  backgroundColor: '#e63a3a',
  size: 'large'
}