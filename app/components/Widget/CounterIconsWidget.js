import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';
import Edit from '@mui/icons-material/Edit';
import { injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import CounterWidget from '../Counter/CounterWidget';
import useStyles from './widget-jss';

function CounterIconWidget() {
  const { classes } = useStyles();
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        {/* Client Type */}
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-dark"
            start={0}
            end={0} // No count needed for Client Type
            duration={3}
            title={`Client Type: ${userDetails?.clientType || 'BASIC'}`}
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Connected Demat */}
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={userDetails?.connectedDematCount || 1}
            duration={3}
            title={`Connected Demat: ${userDetails?.connectedDematCount > 0 ? userDetails?.connectedDematCount : 'DEMO'}`}
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Strategies Subscribed */}
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={userDetails?.strategiesSubscribed || 1}
            duration={3}
            title={`Strategies Subscribed: ${userDetails?.strategiesSubscribed || 1}`}
          >
            <Edit className={classes.counterIcon} />
          </CounterWidget>
        </Grid>

        {/* Plan Duration */}
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={userDetails?.planDuration || 26}
            duration={3}
            title={`Plan Duration: ${userDetails?.planDuration || 26} days`}
          >
            <CollectionsBookmark className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CounterIconWidget.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(CounterIconWidget);
