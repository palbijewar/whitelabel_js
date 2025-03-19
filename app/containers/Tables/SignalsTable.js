import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ReplayIcon from '@mui/icons-material/Replay';

const algoSignals = [
  { id: 1, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 10, buyPrice: 225, sellPrice: 230, pnl: 50, status: 'Open' },
  { id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 5, buyPrice: 475, sellPrice: 480, pnl: 25, status: 'Closed' },
  { id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 7, buyPrice: 460, sellPrice: 455, pnl: -35, status: 'Open' },
  { id: 4, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 8, buyPrice: 220, sellPrice: 225, pnl: 40, status: 'Closed' },
  { id: 5, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900PE', quantity: 6, buyPrice: 490, sellPrice: 495, pnl: 30, status: 'Open' }
];

function AlgoSignalsTable() {
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
        Algo Signals
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.no</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Algo</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Script</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Buy Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Sell Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>PnL</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
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

export default AlgoSignalsTable;