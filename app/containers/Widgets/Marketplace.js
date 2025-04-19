/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
  useTheme,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const cardsData = [
  {
    name: 'Reliance',
    logo: '/images/reliance-logo.png',
    capital: '₹0',
    drawdown: '3%',
    segment: 'NSE-STOCKS',
  },
  {
    name: 'Tata Motors',
    logo: '/images/tata-logo.png',
    capital: '₹2,000',
    drawdown: '2.5%',
    segment: 'NSE-STOCKS',
  },
  {
    name: 'Infosys',
    logo: '/images/infosys-logo.png',
    capital: '₹1,500',
    drawdown: '4%',
    segment: 'NSE-STOCKS',
  },
  {
    name: 'HDFC Bank',
    logo: '/images/hdfc-logo.png',
    capital: '₹3,000',
    drawdown: '1.5%',
    segment: 'NSE-BANKS',
  },
  {
    name: 'Adani Ent.',
    logo: '/images/adani-logo.png',
    capital: '₹1,200',
    drawdown: '3.8%',
    segment: 'NSE-STOCKS',
  },
  {
    name: 'Wipro',
    logo: '/images/wipro-logo.png',
    capital: '₹900',
    drawdown: '2%',
    segment: 'NSE-STOCKS',
  },
];

// Generates unique but profitable patterns per card
const generateChartData = (theme, patternIndex) => {
  const patterns = [
    [10, 12, 14, 16, 18],
    [8, 10, 13, 12, 15],
    [5, 7, 10, 13, 17],
    [12, 11, 14, 16, 20],
    [6, 9, 8, 12, 16],
    [7, 10, 11, 14, 18],
  ];

  const data = patterns[patternIndex % patterns.length];

  return {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data,
        fill: true,
        borderColor: theme.palette.success.main,
        backgroundColor: theme.palette.success.light + '33',
        tension: 0.4,
      },
    ],
  };
};

const chartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
  elements: { point: { radius: 0 } },
};

const MarketplaceCard = ({
  logo,
  name,
  capital,
  drawdown,
  segment,
  chartIndex,
}) => {
  const theme = useTheme();
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
        <Line
          data={generateChartData(theme, chartIndex)}
          options={chartOptions}
        />
      </Box>

      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          <img
            src={logo}
            alt={`${name} Logo`}
            style={{ height: 28, verticalAlign: 'middle', marginRight: 8 }}
          />
          {name}
        </Typography>

        <Typography variant="body2">Min Capital ~ {capital}</Typography>
        <Typography variant="body2">Drawdown ~ {drawdown}</Typography>
        <Typography variant="body2" mb={2}>
          Segment ~ {segment}
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
};

export default function Marketplace() {
  return (
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MarketplaceCard {...card} chartIndex={index} />
        </Grid>
      ))}
    </Grid>
  );
}
