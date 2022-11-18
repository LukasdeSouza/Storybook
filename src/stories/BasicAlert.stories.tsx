import React from 'react';
import { BasicAlerts } from '../components/Alert/BasicAlert';
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
  title: 'Components/Alert/BasicAlerts',
  component: BasicAlerts,
} as ComponentMeta<typeof BasicAlerts>;

const Template: ComponentStory<typeof BasicAlerts> = (args) => <BasicAlerts {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Alerta para notificação do Usuário Outlined',
  severity: 'warning'
}