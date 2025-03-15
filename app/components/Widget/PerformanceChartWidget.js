import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import 'enl-styles/vendors/rechart/styles.css';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import TradingViewWidget from './TradingViewWidget';
import TradingViewTickerWidget from './TradingViewTickerWidget';

function PerformanceChartWidget(props) {
  const { intl } = props;

  return (
    <div>
      <TradingViewTickerWidget/>
      <PapperBlock whiteBg noMargin title={intl.formatMessage(messages.performance_indicator)} icon="timeline" desc="">

        <TradingViewWidget/>

      </PapperBlock>
    </div>
  );
}

PerformanceChartWidget.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(PerformanceChartWidget);
