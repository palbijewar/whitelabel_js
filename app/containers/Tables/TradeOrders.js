import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
  IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ReplayIcon from '@mui/icons-material/Replay';

const tradeOrders = [
  {
    id: 1, algo: 'MACD', script: 'BANKNIFTY 21MAR 462200 CE', lotSize: 1, quantity: 75, buyPrice: 236, sellPrice: 320, pnl: 84, overallPnl: 6300, status: 'CLOSED'
  },
  {
    id: 2, algo: 'RSI', script: 'BANKNIFTY 21MAR 462200 CE', lotSize: 1, quantity: 75, buyPrice: 176, sellPrice: 'NA', pnl: 'N/A', overallPnl: 'N/A', status: 'PENDING'
  },
  {
    id: 3, algo: 'PRICE ACTION', script: 'BANKNIFTY 21MAR 462200 CE', lotSize: 1, quantity: 75, buyPrice: 132, sellPrice: '', pnl: '', overallPnl: '', status: 'OPEN'
  },
  {
    id: 4, algo: 'SWING', script: 'BANKNIFTY 21MAR 462200 CE', lotSize: 1, quantity: 75, buyPrice: 212, sellPrice: 209, pnl: -3, overallPnl: -225, status: 'REJECTED'
  }
];

function TradeOrdersTable() {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleClickOpen = (action) => {
    setSelectedAction(action);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log(`${selectedAction} confirmed!`);
    setOpen(false);
  };

  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Trade Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Algo (Strategy Name)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Strike Price (Script)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Lot Size</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Buy Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Sell Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>P/L % or Point</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Overall P/L</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradeOrders.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.algo}</TableCell>
                <TableCell>{row.script}</TableCell>
                <TableCell>{row.lotSize}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.buyPrice}</TableCell>
                <TableCell>{row.sellPrice}</TableCell>
                <TableCell style={{ color: row.pnl >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>{row.pnl}</TableCell>
                <TableCell style={{ color: row.overallPnl >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>{row.overallPnl}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton color="primary" sx={{ marginRight: 1 }} onClick={() => handleClickOpen('Square Off')}>
                    <HighlightOffIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleClickOpen('Retry')}>
                    <ReplayIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed with {selectedAction}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">No</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default TradeOrdersTable;
