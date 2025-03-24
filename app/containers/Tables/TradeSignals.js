import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const tradeSignals = [
  {
    id: 1, signalTime: '21/03/2025 09:41:43', type: 'LONG ENTRY', symbol: 'BANKNIFTY27MAR2550200CE', price: 304.9, strategy: 'FBT', trigger: 'MT_4 OR Trading View'
  },
  {
    id: 2, signalTime: '21/03/2025 09:41:43', type: 'LONG EXIT', symbol: 'BANKNIFTY27MAR2550200CE', price: 304.9, strategy: 'FBT', trigger: 'MT_4 OR Trading View'
  },
  {
    id: 3, signalTime: '21/03/2025 09:41:43', type: 'SHORT ENTRY', symbol: 'BANKNIFTY27MAR2550200CE', price: 304.9, strategy: 'FBT', trigger: 'MT_4 OR Trading View'
  },
  {
    id: 4, signalTime: '21/03/2025 09:41:43', type: 'SHORT EXIT', symbol: 'BANKNIFTY27MAR2550200CE', price: 304.9, strategy: 'FBT', trigger: 'MT_4 OR Trading View'
  }
];

function TradeSignalsTable() {
  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Trade Signals
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Signal Time</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Strategy</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Trigger</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradeSignals.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.signalTime}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.strategy}</TableCell>
                <TableCell>{row.trigger}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TradeSignalsTable;
