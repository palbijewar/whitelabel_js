import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip
} from '@mui/material';

const tradingData = [
  {
    id: 1, symbol: 'NIFTY', status: 'Active', time: '10:15 AM'
  },
  {
    id: 2, symbol: 'BANK NIFTY', status: 'Completed', time: '11:30 AM'
  },
  {
    id: 3, symbol: 'FIN NIFTY', status: 'Pending', time: '12:45 PM'
  }
];

function TradingStatus() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 3 }}>
      <Typography variant="h6" align="center" sx={{ padding: 2 }}>
        Trading Status
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tradingData.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.symbol}</TableCell>
              <TableCell>
                <Chip
                  label={trade.status}
                  color={trade.status === 'Active' ? 'primary' : trade.status === 'Completed' ? 'success' : 'warning'}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{trade.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TradingStatus;
