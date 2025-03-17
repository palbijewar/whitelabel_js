import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ReplayIcon from '@mui/icons-material/Replay';

const subscriptions = [
  { id: 1, algo: 'BULLBEAR NIFTY INTRADAY', quantity: 10, tradeLimit: 50, status: 'Active' },
  { id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', quantity: 5, tradeLimit: 30, status: 'Inactive' },
  { id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', quantity: 7, tradeLimit: 40, status: 'Active' },
  { id: 4, algo: 'BULLBEAR NIFTY INTRADAY', quantity: 8, tradeLimit: 45, status: 'Inactive' },
  { id: 5, algo: 'BULL BEAR BANKNIFTY INTRADAY', quantity: 6, tradeLimit: 35, status: 'Active' }
];

function SubscriptionTable() {
  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Subscription Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>S.no</TableCell>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Algo</TableCell>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Trade Limit</TableCell>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.algo}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.tradeLimit}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton color="primary" sx={{ marginRight: 1 }}>
                    <HighlightOffIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <ReplayIcon />
                  </IconButton>
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