import * as React from 'react';
import Button from '@mui/material/Button';

interface NewButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained";
  backgroundColor: string;
  size?: "small" | "medium" | "large";
}

export const NewButton: React.FC<NewButtonProps> = ({ label, variant, backgroundColor, size }) => {
  return (
    <Button
      variant={variant}
      size={size}
      sx={{ backgroundColor: backgroundColor }}>
      {label}
    </Button>
  );
}