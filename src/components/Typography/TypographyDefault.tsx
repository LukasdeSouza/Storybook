import { Typography } from '@mui/material'
import React from 'react'

interface TypographyProps {
  label: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'overline';
  align?: 'center' | 'justify' | 'left' | 'right' | 'inherit';
  fontFamily?: 'Arial' | 'open sans' | 'sans serif' | 'serif' | 'cursive' | 'fantasy' | 'monospace' | '-moz-nitial';
  color?: string;
  letterSpacing?: number;
}

const TypographyDefault: React.FC<TypographyProps> = ({ label, variant, align, fontFamily, color, letterSpacing, ...props }) => {
  return (
    <>
      <Typography
        variant={variant}
        align={align}
        fontFamily={fontFamily}
        color={color}
        letterSpacing={letterSpacing}
        {...props}>
        {label}
      </Typography>
    </>
  )
}

export default TypographyDefault