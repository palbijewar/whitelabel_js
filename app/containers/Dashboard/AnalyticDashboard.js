import React, { useState } from 'react';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { CounterIconsWidget, PerformanceChartWidget } from 'enl-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useStyles from './dashboard-jss';
import TradingViewWidget from '../../components/Widget/TradingViewWidget';

const algoSignals = [
  {
    id: 1, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 10, buyPrice: 225, sellPrice: 230, pnl: 50, status: 'Open'
  },
  {
    id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 5, buyPrice: 475, sellPrice: 480, pnl: 25, status: 'Closed'
  },
  {
    id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 7, buyPrice: 460, sellPrice: 455, pnl: -35, status: 'Open'
  }
];

function AnalyticDashboard() {
  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = useStyles();

  const [open, setOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [isPaperTrade, setIsPaperTrade] = useState(true);

  const handleToggle = () => {
    setIsPaperTrade(!isPaperTrade);
  };

  const handleOpenDialog = (id, type) => {
    setSelectedId(id);
    setActionType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
    setActionType('');
  };

  const handleConfirm = () => {
    console.log(`Performing ${actionType} action on ID: ${selectedId}`);
    handleClose();
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <CounterIconsWidget />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />
      <Grid container justifyContent="space-between" alignItems="center">
        <FormControlLabel
          control={<Switch checked={isPaperTrade} onChange={handleToggle} />}
          label={isPaperTrade ? 'PAPER TRADE' : 'LIVE'}
        />
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <TradingViewWidget/>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
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
                    <IconButton color="primary" sx={{ marginRight: 1 }} onClick={() => handleOpenDialog(row.id, 'Square Off')}>
                      <HighlightOffIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleOpenDialog(row.id, 'Retry')}>
                      <ReplayIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {actionType} this trade?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">No</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AnalyticDashboard;
