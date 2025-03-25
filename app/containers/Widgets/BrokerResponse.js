import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const tradeData = [
  {
    id: 1, date: '2025-03-14', symbol: 'AAPL', type: 'BUY', quantity: 10, price: 150, status: 'Completed'
  },
  {
    id: 2, date: '2025-03-13', symbol: 'GOOGL', type: 'SELL', quantity: 5, price: 2800, status: 'Pending'
  },
  {
    id: 3, date: '2025-03-12', symbol: 'TSLA', type: 'BUY', quantity: 3, price: 700, status: 'Completed'
  },
  {
    id: 4, date: '2025-03-11', symbol: 'MSFT', type: 'SELL', quantity: 8, price: 310, status: 'Failed'
  }
];

function BrokerResponse() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" align="center" sx={{ padding: 2 }}>
        Broker Response - Trade History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tradeData.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.symbol}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>{trade.quantity}</TableCell>
              <TableCell>${trade.price}</TableCell>
              <TableCell>{trade.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BrokerResponse;
