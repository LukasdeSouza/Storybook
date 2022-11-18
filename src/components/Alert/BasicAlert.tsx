import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface BasicAlertsProps {
  severity?: 'error' | 'warning' | 'info' | 'success';
  label: string;
}

export const BasicAlerts: React.FC<BasicAlertsProps> = ({ severity, label }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant='outlined' severity={severity}>
        {label}
      </Alert>
    </Stack>
  );
}