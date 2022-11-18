import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

interface DescriptionAlertsProps {
  severity?: 'error' | 'warning' | 'info' | 'success';
  title?: string;
  strong: string;
  label: string;
}

export const DescriptionAlerts: React.FC<DescriptionAlertsProps> = ({ severity, title, label, strong }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {label} — <strong>{strong}</strong>
      </Alert>
      {/* <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert> */}
    </Stack>
  );
}