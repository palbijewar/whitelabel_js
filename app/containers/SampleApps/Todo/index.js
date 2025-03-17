import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button 
} from '@mui/material';

const algoSignals = [
  {
    id: 1, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 10, buyPrice: 225, sellPrice: 230, pnl: 50, status: 'Open' },
  {
    id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 5, buyPrice: 475, sellPrice: 480, pnl: 25, status: 'Closed' },
  {
    id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 7, buyPrice: 460, sellPrice: 455, pnl: -35, status: 'Open' },
  {
    id: 4, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 8, buyPrice: 220, sellPrice: 225, pnl: 40, status: 'Closed' },
  {
    id: 5, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900PE', quantity: 6, buyPrice: 490, sellPrice: 495, pnl: 30, status: 'Open' }
];

function AlgoSignalsTable() {
  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Algo Signal's
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>S.no</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Algo</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Script</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Buy Price</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Sell Price</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>PnL</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {algoSignals.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.algo}</TableCell>
                <TableCell>{row.script}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.buyPrice}</TableCell>
                <TableCell>{row.sellPrice}</TableCell>
                <TableCell style={{ color: row.pnl >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>{row.pnl}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>SqOff</Button>
                  <Button variant="contained" color="secondary" size="small">Retry</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AlgoSignalsTable;
