import React from 'react';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { AdminCounterWidget } from 'enl-components';
import useStyles from './dashboard-jss';

function AdminDashboard() {
  const title = brand.name + ' - Admin Dashboard';
  const description = brand.desc;
  const { classes } = useStyles();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <AdminCounterWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}

export default AdminDashboard;
