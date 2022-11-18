import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularProgressProps {
  color?: 'success' | 'secondary' | 'warning' | 'info' | 'error';
}

export const CircularIndeterminate: React.FC<CircularProgressProps> = ({ color, ...props }) => {
  return (
    <CircularProgress color={color} {...props} />
  );
}