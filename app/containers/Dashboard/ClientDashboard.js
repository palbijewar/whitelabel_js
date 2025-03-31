import React, { useState } from 'react';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { CounterIconsWidget, PerformanceChartWidget } from 'enl-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useStyles from './dashboard-jss';
import TradingViewWidget from '../../components/Widget/TradingViewWidget';
import SymbolTable from '../../components/Tables/EmptyData';
import SalesChartWidget from '../../components/Widget/SalesChartWidget';
import TodaysStatisticsTable from '../../components/Tables/TodaysSignalsTable';

function ClientDashboard() {
  const title = brand.name + ' - Client Dashboard';
  const description = brand.desc;
  const { classes } = useStyles();

  const [isPaperTrade, setIsPaperTrade] = useState(true);

  const handleToggle = () => {
    setIsPaperTrade(!isPaperTrade);
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
          label={isPaperTrade ? 'LIVE' : 'PAPER TRADE'}
        />
      </Grid>

      <Grid container spacing={3} className={classes.root}>

        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2, height: '100%', overflow: 'auto' }}>
            <SymbolTable />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, height: '100%', overflow: 'auto' }}>
            <SalesChartWidget />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <TodaysStatisticsTable/>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <TradingViewWidget/>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}

export default ClientDashboard;
