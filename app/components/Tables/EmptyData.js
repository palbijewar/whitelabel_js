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
    <TableContainer component={Paper} className={classes.table} sx={{ maxHeight: 300, overflowY: 'auto' }}>
      <Typography variant="subtitle1" align="center" sx={{ padding: 1 }}>
    Trading Symbols
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Symbols</TableCell>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Qty</TableCell>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Lots</TableCell>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Strategy</TableCell>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Class</TableCell>
            <TableCell sx={{ fontWeight: 'bold', padding: '4px' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ padding: '4px' }}>{row.symbol}</TableCell>
              <TableCell sx={{ padding: '4px' }}>{row.quantity}</TableCell>
              <TableCell sx={{ padding: '4px' }}>
                <Select value={row.lots} size="small" sx={{ minWidth: 50 }}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </TableCell>
              <TableCell sx={{ padding: '4px' }}>
                <Select value={row.strategy} size="small" sx={{ minWidth: 80 }}>
                  <MenuItem value="BREAKOUT">BREAKOUT</MenuItem>
                  <MenuItem value="REVERSAL">REVERSAL</MenuItem>
                  <MenuItem value="SCALPING">SCALPING</MenuItem>
                </Select>
              </TableCell>
              <TableCell sx={{ padding: '4px' }}>{row.productClass}</TableCell>
              <TableCell sx={{ padding: '4px' }}>
                <Button
                  variant="contained"
                  color={row.action === 'Activate' ? 'primary' : 'secondary'}
                  size="small"
                  sx={{ minWidth: 80 }}
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
