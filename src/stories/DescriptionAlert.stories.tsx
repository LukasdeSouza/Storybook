import React from 'react';
import { DescriptionAlerts } from '../components/Alert/DescriptionAlert';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: 'Components/Alert/Alert',
  component: DescriptionAlerts,
} as ComponentMeta<typeof DescriptionAlerts>;

const Template: ComponentStory<typeof DescriptionAlerts> = (args) => <DescriptionAlerts {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Alerta para Notificação do Usuário Default',
  severity: 'error',
  strong: 'importante!',
  title: 'Atenção!'
}

