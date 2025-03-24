# Algo Trading Software  

A powerful algorithmic trading software built with **React, Firebase, Material-UI, and Redux**. This app enables automated trading, strategy backtesting, and real-time market analysis.  

## Features  
✅ **User Authentication** (Firebase - Email/Google/Twitter/GitHub)  
✅ **Real-Time Market Data**  
✅ **Automated Trading Strategies**  
✅ **Strategy Backtesting**  
✅ **Trading Dashboard with Insights**  
✅ **Responsive UI with Material-UI**  

## Installation  

### 1️⃣ Clone the Repository  
```sh
git clone [https://github.com/your-repo.git](https://github.com/palbijewar/whitelabel_js.git)
cd your-project
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Configure Firebase & API Keys  
Create a `.env` file and add your API keys:  
```sh
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_TRADING_API_KEY=your_trading_api_key
```

### 4️⃣ Start the Application  
```sh
npm start
```

## Usage  
1. **Login/Register** with Firebase Auth  
2. **Connect Your Trading Account** (via API keys)  
3. **Select or Create a Trading Strategy**  
4. **Run Backtesting** to validate performance  
5. **Go Live** and let the bot trade automatically!  

## Folder Structure  
📂 **src/components** – UI Components (charts, forms, tables)  
📂 **src/pages** – Auth, Dashboard, and Trading pages  
📂 **src/redux** – State management (user, trades, strategies)  
📂 **src/firebase.js** – Firebase configuration  
📂 **src/api** – API handlers for market data & trades  

## Troubleshooting  
⚠️ **Incorrect API Keys?** Check `.env` settings.  
⚠️ **Trading Bot Not Executing?** Verify API permissions.  
⚠️ **UI Issues?** Ensure Material-UI is installed properly.  

## License  
MIT  
