import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const statisticsData = {
  numberOfTrades: 5,
  rejectedTrades: 1,
  openTrades: 1,
  closedTrades: 3,
};

const indexOptionsData = [
  {
    name: 'NIFTY-50', open: 23168, prevClose: 23190.65, high: 23276.70, low: 23132.80, oneD: '0.36%'
  },
  {
    name: 'NIFTY BANK', open: 23168, prevClose: 23190.65, high: 23276.70, low: 23132.80, oneD: '0.36%'
  },
  {
    name: 'NIFTY FIN SERVICE', open: 23168, prevClose: 23190.65, high: 23276.70, low: 23132.80, oneD: '0.36%'
  },
];

function TodaysStatisticsTable() {
  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Todays Statistics
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number of Trades</TableCell>
              <TableCell>Rejected Trades</TableCell>
              <TableCell>Open Trades</TableCell>
              <TableCell>Closed Trades</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{statisticsData.numberOfTrades}</TableCell>
              <TableCell>{statisticsData.rejectedTrades}</TableCell>
              <TableCell>{statisticsData.openTrades}</TableCell>
              <TableCell>{statisticsData.closedTrades}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" align="center" gutterBottom sx={{ marginTop: 3 }}>
        Index Options Performance
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Open Price</TableCell>
              <TableCell>Previous Close</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>1D%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {indexOptionsData.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.open}</TableCell>
                <TableCell>{row.prevClose}</TableCell>
                <TableCell>{row.high}</TableCell>
                <TableCell>{row.low}</TableCell>
                <TableCell>{row.oneD}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

TodaysStatisticsTable.propTypes = {
  title: PropTypes.string,
};

export default TodaysStatisticsTable;
