import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: theme.spacing(4),
    maxWidth: 900,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const NotificationDashboard = () => {
  const { classes } = useStyles();

  const [notifications, setNotifications] = useState({
    email: true,
  });

  const handleToggle = (name) => (event) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };

  const dummyNotifications = [
    {
      id: 1,
      title: 'New Message from Admin',
      description: 'You have a new message regarding your recent activity.',
      time: '2025-03-24 10:30 AM',
    },
    {
      id: 2,
      title: 'System Update',
      description: 'The system will undergo maintenance at 2:00 AM tonight.',
      time: '2025-03-23 09:00 PM',
    },
    {
      id: 3,
      title: 'Weekly Summary',
      description: 'Your activity summary for the past week is now available.',
      time: '2025-03-22 08:00 AM',
    },
  ];

  return (
    <Paper className={classes.container} elevation={3}>
      <Typography variant="h5" className={classes.title}>
        Notifications
      </Typography>

      <Grid container direction="column" spacing={2}>
        <Grid item className={classes.section}>
          <FormControlLabel
            control={
              <Switch
                checked={notifications.email}
                onChange={handleToggle('email')}
                color="primary"
              />
            }
            label="Email Notifications"
          />
        </Grid>
      </Grid>
      <Grid item className={classes.section}>
        <Grid container direction="column" spacing={2}>
          {dummyNotifications.map((notification) => (
            <Grid item key={notification.id}>
              <Paper elevation={1} style={{ padding: '16px' }}>
                <Typography variant="subtitle1" gutterBottom>
                  {notification.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {notification.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {notification.time}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NotificationDashboard;
