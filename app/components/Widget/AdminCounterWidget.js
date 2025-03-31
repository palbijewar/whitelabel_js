import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import PersonOutline from '@mui/icons-material/PersonOutline';
import WorkOutline from '@mui/icons-material/WorkOutline';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import useStyles from './widget-jss';
import CounterWidget from '../Counter/CounterWidget';

function AdminCounterWidget() {
  const { classes } = useStyles();

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        {/* Live Clients */}
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="primary-dark" start={0} end={10} duration={3} title="Total Live Clients">
            <AssignmentTurnedIn className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="primary-main" start={0} end={4} duration={3} title="Active Live Clients">
            <AssignmentTurnedIn className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="error-light" start={0} end={3} duration={3} title="Expired Live Clients">
            <WorkOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Demo Clients */}
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="info-dark" start={0} end={50} duration={3} title="Total Demo Clients">
            <PersonOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="info-main" start={0} end={21} duration={3} title="Active Demo Clients">
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="error-main" start={0} end={10} duration={3} title="Expired Demo Clients">
            <WorkOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Demo 2,7 Days Clients */}
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="warning-dark" start={0} end={10} duration={3} title="Total Demo 2,7 Days Clients">
            <PersonOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="warning-main" start={0} end={4} duration={3} title="Active Demo 2,7 Days Clients">
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="error-main" start={0} end={4} duration={3} title="Expired Demo 2,7 Days Clients">
            <WorkOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Licenses */}
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="success-dark" start={0} end={100} duration={3} title="Total Licenses">
            <AssignmentTurnedIn className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="success-main" start={0} end={75} duration={3} title="Remaining Licenses">
            <AssignmentTurnedIn className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CounterWidget color="error-dark" start={0} end={25} duration={3} title="Used Licenses">
            <WorkOutline className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

AdminCounterWidget.propTypes = {
  intl: PropTypes.object.isRequired
};

export default AdminCounterWidget;
