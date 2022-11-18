import {
  Link,
  Stack,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material";
import React from "react";

export const TableRowContract = ({ row, style }) => {
  const theme = useTheme();

  return (
    <TableRow
      {...style}
      sx={{
        "&:child td, &:first-child th": { border: 0 },
        display: "table-row !important",
        mt: 2,
        mb: 2,
      }}>
      <TableCell align="left" sx={{ minWidth: 450, fontSize: 16 }}>
        <Stack alignItems={"left"}>
          <Link
            component="button"
            underline="none"
            sx={{
              textAlign: "left",
              color: "green",
              fontFamily: "inherit",
              cursor: 'default',
              fontWeight: 600
            }}>
            {row.id}
          </Link>
        </Stack>
      </TableCell>

      <TableCell
        align="left"
        sx={{
          minWidth: 450,
          fontWeight: 500,
        }}>
        {row.email}
      </TableCell>
      <TableCell align="left" sx={{ minWidth: 450 }}>
        {row.name}
      </TableCell>
    </TableRow>
  );
};
