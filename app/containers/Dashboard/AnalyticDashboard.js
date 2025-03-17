import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const subscriptions = [
  { id: 1, algo: 'BULL BEAR BANKNIFTY INTRADAY', quantity: 1, date: '2025-03-15 17:40:53' },
  { id: 2, algo: 'IRON CONDOR (BANKNIFTY)', quantity: 1, date: '2025-02-11 11:32:48' },
  { id: 3, algo: 'STRANGLE OPTION SELLING', quantity: 1, date: '2025-02-11 11:32:47' },
  { id: 4, algo: 'STRADDLE OPTION SELLING', quantity: 1, date: '2025-02-11 11:32:46' },
  { id: 5, algo: 'IRON FLY (BANKNIFTY)', quantity: 1, date: '2025-02-11 11:32:45' },
  { id: 6, algo: 'THETA EATER OPTION SELLING', quantity: 1, date: '2025-02-11 11:32:43' },
  { id: 7, algo: 'BREAKOUT CROSSOVER POSITIONAL NIFTY', quantity: 1, date: '2025-02-11 11:32:28' },
  { id: 8, algo: 'BANKNIFTY SCALPER INTRADAY', quantity: 1, date: '2025-02-11 11:32:25' },
  { id: 9, algo: 'BREAKOUT CROSSOVER POSITIONAL BANKNIFTY', quantity: 1, date: '2025-02-11 11:32:24' },
  { id: 10, algo: 'PRIME BANKNIFTY INTRADAY', quantity: 1, date: '2025-02-07 11:31:11' },
  { id: 11, algo: 'PRIME NIFTY INTRADAY', quantity: 1, date: '2025-02-07 11:30:33' },
  { id: 12, algo: 'BULLBEAR NIFTY INTRADAY', quantity: 10, date: '2025-02-07 11:25:24' },
  { id: 13, algo: 'NIFTY SCALPER INTRADAY', quantity: 1, date: '2025-02-03 15:58:58' },
  { id: 14, algo: 'Reliance', quantity: 1, date: '2025-01-25 13:17:07' }
];

function SubscriptionTable() {
  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Subscriptions
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.no</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Algo</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.algo}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>Edit</Button>
                  <Button variant="contained" color="secondary" size="small">Unsubscribe</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default SubscriptionTable;
