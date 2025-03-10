import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';
import Edit from '@mui/icons-material/Edit';
import { injectIntl } from 'react-intl';
import CounterWidget from '../Counter/CounterWidget';
import messages from './messages';
import useStyles from './widget-jss';
import { useSelector } from 'react-redux';

function CounterIconWidget(props) {
  const { intl } = props;
  const { classes } = useStyles();
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-dark"
            start={0}
            end={207}
            duration={3}
            title={userDetails?.name}
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={300}
            duration={3}
            title="Angel One"
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={67}
            duration={3}
            title="Crypto"
          >
            <Edit className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={70}
            duration={3}
            title="Total Traders"
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
