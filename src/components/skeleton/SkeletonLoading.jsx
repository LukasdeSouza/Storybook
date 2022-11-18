import { Skeleton, TableCell, TableRow } from '@mui/material'
import React from 'react'


export const SkeletonLoading = ({ style }) => {
  return (
    <TableRow sx={{ display: 'flex', alignItems: 'center' }} style={style}>
      <TableCell key={`skeleton-1`} sx={{ width: '100%', display: 'inline-block', boxSizing: 'border-box' }} align="left">
        <Skeleton variant="rectangular" animation="wave" />
      </TableCell>
      <TableCell key={`skeleton-2`} align="center" sx={{ minWidth: 300 }}>
        <Skeleton variant="rectangular" animation="wave" />
      </TableCell>
      <TableCell key={`skeleton-4`} align="center" sx={{ minWidth: 100 }}>
        <Skeleton variant="rectangular" animation="wave" />
      </TableCell>
    </TableRow>
  )
}
