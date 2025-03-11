import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const algoSignals = [
  { id: 1, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', price: '', signal: 'SELL', time: '2025-03-11 10:34:03' },
  { id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', price: '', signal: 'SELL', time: '2025-03-11 10:23:08' },
  { id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', price: '', signal: 'BUY', time: '2025-03-11 10:20:14' },
  { id: 4, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', price: '', signal: 'BUY', time: '2025-03-11 10:15:10' },
  { id: 5, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900PE', price: '', signal: 'SELL', time: '2025-03-11 09:30:28' }
];

function AlgoSignalsTable() {
  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Algo Signal's
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Algo</TableCell>
              <TableCell>Script</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Signal</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {algoSignals.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.algo}</TableCell>
                <TableCell>{row.script}</TableCell>
                <TableCell>{row.price || '-'}</TableCell>
                <TableCell style={{ color: row.signal === 'BUY' ? 'green' : 'red', fontWeight: 'bold' }}>
                  {row.signal}
                </TableCell>
                <TableCell>{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AlgoSignalsTable;