import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from 'enl-components/Tables/tableStyle-jss';

const initialData = [
  {
    id: 1, symbol: 'NIFTY', quantity: 150, lots: 2, strategy: 'BREAKOUT', productClass: 'MIS', action: 'Activate'
  },
  {
    id: 2, symbol: 'BANK NIFTY', quantity: 30, lots: 1, strategy: 'BREAKOUT', productClass: 'MIS', action: 'Activate'
  },
  {
    id: 3, symbol: 'FIN NIFTY', quantity: 40, lots: 1, strategy: 'BREAKOUT', productClass: 'MIS', action: 'Deactivate'
  }
];

function SymbolTable() {
  const { classes } = useStyles();
  const [data, setData] = useState(initialData);

  const handleActionClick = (id) => {
    setData((prevData) => prevData.map((row) => (row.id === id
      ? { ...row, action: row.action === 'Activate' ? 'Deactivate' : 'Activate' }
      : row)
    )
    );
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Typography variant="h6" align="center" sx={{ padding: 2 }}>
        Trading Symbols
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Symbols</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Select (Lots)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Select Strategy</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Product Class</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.symbol}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <Select value={row.lots} size="small">
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select value={row.strategy} size="small">
                  <MenuItem value="BREAKOUT">BREAKOUT</MenuItem>
                  <MenuItem value="REVERSAL">REVERSAL</MenuItem>
                  <MenuItem value="SCALPING">SCALPING</MenuItem>
                </Select>
              </TableCell>
              <TableCell>{row.productClass}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={row.action === 'Activate' ? 'primary' : 'secondary'}
                  onClick={() => handleActionClick(row.id)}
                >
                  {row.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SymbolTable;
