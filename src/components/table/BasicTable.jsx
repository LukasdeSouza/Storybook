import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [{
  "count": 9,
  "currentPage": 0,
  "objects": [
    {
      "id": "a15c70c8",
      "email": "leandro@bestdeal.com.br",
      "name": "teste1808"
    },
    {
      "id": "4630c80a",
      "email": "leandro@bestdeal.com.br",
      "name": "teste integração 1908"
    },
    {
      "id": "9ad1fce6",
      "email": "leandro@bestdeal.com.br",
      "name": "teste integração PF2"
    },
    {
      "id": "cfbbc679",
      "email": "leandro@bestdeal.com.br",
      "name": "Diego Ferreira de Carvalho"
    },
    {
      "id": "db79585f",
      "email": "leandro@bestdeal.com.br",
      "name": "Alexandre oliv"
    },
    {
      "id": "50530736",
      "email": "leandro@bestdeal.com.br",
      "name": "teste teste"
    },
    {
      "id": "3bef2976",
      "email": "leandro@bestdeal.com.br",
      "name": "teste2508"
    },
    {
      "id": "b6b9695a",
      "email": "leandro@bestdeal.com.br",
      "name": "Marcela Aline Bernardes"
    },
    {
      "id": "9b7b8dce",
      "email": "renan.tartari@deltaenergia.com",
      "name": "renan tartari"
    }
  ],
  "pageSize": 10,
  "totalPages": 1
}];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.objects.id}</TableCell>
              <TableCell align="right">{row.objects.name}</TableCell>
              <TableCell align="right">{row.objects.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}