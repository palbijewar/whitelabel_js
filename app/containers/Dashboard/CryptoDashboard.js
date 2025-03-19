import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
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
        Subscription Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.no</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Algo</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Trade Limit</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
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

export default SubscriptionTable;