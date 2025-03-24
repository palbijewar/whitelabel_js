import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { injectIntl } from 'react-intl';
import useStyles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const COLORS = ['#FF0000', '#00A300'];

const dataSales = [
  { name: 'Loss', value: 300 },
  { name: 'Profit', value: 400 },
];

function SalesChartWidget() {
  const { classes } = useStyles();

  return (
    <PapperBlock whiteBg noMargin title="Today P&L" icon="pie_chart" desc="">
      <Grid container spacing={3}>
        {/* Summary Section */}
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            <Grid item>
              <Typography variant="subtitle1">Total Buy Value</Typography>
              <Typography variant="h6" color="primary">₹5,00,000</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">P & L</Typography>
              <Typography variant="h6" color="secondary">₹25,000</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Total Sell Value</Typography>
              <Typography variant="h6" color="primary">₹5,25,000</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} sx={{ marginTop: 2 }} />
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12}>
          <Typography variant="h6" align="center" sx={{ paddingBottom: 2 }}>
            CHART & GRAPH
          </Typography>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={dataSales}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {dataSales.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={40} />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

SalesChartWidget.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(SalesChartWidget);
