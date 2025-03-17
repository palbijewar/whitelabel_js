import React from 'react';
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
import Button from '@mui/material/Button';
import { CounterIconsWidget, PerformanceChartWidget } from 'enl-components';
import useStyles from './dashboard-jss';

const algoSignals = [
  { id: 1, algo: 'BULLBEAR NIFTY INTRADAY', script: 'NIFTY13MAR2522450CE', quantity: 10, buyPrice: 225, sellPrice: 230, pnl: 50, status: 'Open' },
  { id: 2, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 5, buyPrice: 475, sellPrice: 480, pnl: 25, status: 'Closed' },
  { id: 3, algo: 'BULL BEAR BANKNIFTY INTRADAY', script: 'BANKNIFTY27MAR2547900CE', quantity: 7, buyPrice: 460, sellPrice: 455, pnl: -35, status: 'Open' }
];

function AnalyticDashboard() {
  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = useStyles();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* 1st Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <CounterIconsWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* 2nd Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* Algo Signals Table */}
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
                    <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>SqOff</Button>
                    <Button variant="contained" color="secondary" size="small">Retry</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default AnalyticDashboard;