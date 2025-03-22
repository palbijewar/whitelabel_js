import React, { useEffect, useRef, memo } from 'react';

function TradingViewTickerWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `{
      "symbols": [
        { "proName": "NSE:NIFTY50", "title": "Nifty 50" },
        { "proName": "NSE:CNXBANK", "title": "Bank Nifty" },
        { "proName": "NSE:RELIANCE", "title": "Reliance Industries" },
        { "proName": "NSE:TCS", "title": "TCS" },
        { "proName": "NSE:INFY", "title": "Infosys" },
        { "proName": "NSE:HDFCBANK", "title": "HDFC Bank" },
        { "proName": "NSE:ICICIBANK", "title": "ICICI Bank" },
        { "proName": "NSE:SBIN", "title": "State Bank of India" },
        { "proName": "NSE:KOTAKBANK", "title": "Kotak Mahindra Bank" },
        { "proName": "NSE:ITC", "title": "ITC" },
        { "proName": "NSE:HINDUNILVR", "title": "Hindustan Unilever" },
        { "proName": "NSE:LT", "title": "Larsen & Toubro" },
        { "proName": "NSE:AXISBANK", "title": "Axis Bank" },
        { "proName": "NSE:BHARTIARTL", "title": "Bharti Airtel" },
        { "proName": "NSE:ASIANPAINT", "title": "Asian Paints" }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ width: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewTickerWidget);
