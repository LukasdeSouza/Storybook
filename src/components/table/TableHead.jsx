import { TableCell, TableHead, TableRow, useTheme } from '@mui/material'
import React from 'react'

export const TableHeadContract = () => {
  const theme = useTheme()
  return (
    <TableHead sx={{ color: 'black', fontSize: 14 }}>
      <TableRow>
        <TableCell
          sx={{
            fontWeight: "700",
            minWidth: 450,
            color: "inherit",
            fontSize: "inherit",
          }}
          align="left">
          ID
        </TableCell>
        <TableCell
          sx={{
            fontWeight: "700",
            minWidth: 450,
            color: "inherit",
            fontSize: "inherit",
          }}
          align="left">
          Email
        </TableCell>

        <TableCell
          sx={{
            fontWeight: "700",
            minWidth: 450,
            pr: 6,
            color: "inherit",
            fontSize: "inherit",
          }}
          align="left">
          Nome
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
