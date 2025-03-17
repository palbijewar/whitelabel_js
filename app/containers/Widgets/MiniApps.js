import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RelianceCard() {
  return (
    <Card sx={{ maxWidth: 300, padding: 2, textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">Strategy Name</Typography>
        <Typography variant="body2" color="textSecondary">Min Capital ~ 0</Typography>
        <Typography variant="body2" color="textSecondary">Drawdown ~ 3</Typography>
        <Typography variant="body2" color="textSecondary">Segment ~ NSE-STOCKS</Typography>
      </CardContent>
    </Card>
  );
}

export default RelianceCard;