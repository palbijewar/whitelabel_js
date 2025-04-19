import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function Marketplace() {
  const theme = useTheme();

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [10, 12, 8, 15, 13],
        fill: true,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light + '33',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  return (
    <Card sx={{ position: 'relative', overflow: 'hidden', minHeight: 250 }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.2,
          zIndex: 0,
        }}
      >
        <Line data={chartData} options={chartOptions} />
      </Box>

      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          <img
            src="/images/reliance-logo.png"
            alt="Reliance Logo"
            style={{ height: 28, verticalAlign: 'middle', marginRight: 8 }}
          />
          Reliance
        </Typography>

        <Typography variant="body2">Min Capital ~ ₹0</Typography>
        <Typography variant="body2">Drawdown ~ 3%</Typography>
        <Typography variant="body2" mb={2}>
          Segment ~ NSE-STOCKS
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="small" color="primary">
            Subscribe
          </Button>
          <Button variant="outlined" size="small" color="primary">
            Configure
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
