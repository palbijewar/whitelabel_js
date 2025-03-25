module.exports = [
  {
    key: 'home',
    name: 'Dashboard',
    icon: 'dashboard',
    linkParent: '/app/dashboard',
  },
  {
    key: 'trading-details',
    name: 'Trading Details',
    icon: 'bar_chart',
    child: [
      {
        key: 'trade-orders',
        name: 'Trade Orders',
        icon: 'list_alt',
        link: '/app/tables/trade-orders'
      },
      {
        key: 'trade-signals',
        name: 'Trade Signals',
        icon: 'timeline',
        link: '/app/tables/trade-signals'
      }
    ]
  },
  {
    key: 'trading-status',
    name: 'Trading Status',
    icon: 'show_chart',
    linkParent: '/app/tables/trading-status',
  },
  {
    key: 'Marketplace',
    name: 'Marketplace',
    icon: 'storefront',
    child: [
      {
        key: 'PrimeAlgoStocks',
        name: 'Prime Algo Stocks',
        link: '/app/widgets/mini-apps',
        icon: 'trending_up',
      },
      {
        key: 'PrimeAlgoFO',
        name: 'Prime Algo F&O',
        link: '/app/widgets/mini-apps',
        icon: 'assessment',
      },
      {
        key: 'PrimeAlgoMcx',
        name: 'Prime Algo MCX',
        link: '/app/widgets/mini-apps',
        icon: 'leaderboard',
      },
      {
        key: 'PrimeAlgoCurrency',
        name: 'Prime Algo Currency',
        link: '/app/widgets/mini-apps',
        icon: 'attach_money',
      },
    ]
  },
  {
    key: 'broker-response',
    name: 'Broker Response',
    icon: 'receipt_long',
    linkParent: '/app/widgets/broker-response',
  },
  {
    key: 'subscription',
    name: 'Subscription',
    icon: 'subscriptions',
    linkParent: '/app/dashboard/crypto',
  },
  {
    key: 'Notification',
    name: 'Notification',
    icon: 'notifications',
    linkParent: '/app/pages/user-notifications',
  },
  {
    key: 'connect-broker',
    name: 'Connect Broker',
    icon: 'link',
    child: [
      {
        key: 'AngelOne',
        name: 'AngelOne',
        icon: 'business_center',
        link: '/app/ui/card-papper'
      },
      {
        key: 'Aliceblue',
        name: 'Aliceblue',
        icon: 'show_chart',
        link: '/app/ui/accordion'
      },
      {
        key: 'Zerodha',
        name: 'Zerodha',
        icon: 'track_changes',
        link: '/app/ui/tree-view'
      },
      {
        key: 'Shoonya',
        name: 'Shoonya',
        icon: 'insights',
        link: '/app/ui/tabs'
      },
      {
        key: 'Fyers',
        name: 'Fyers',
        icon: 'multiline_chart',
        link: '/app/ui/drawer-menu'
      }
    ]
  },
  {
    key: 'login-status',
    name: 'Login Status',
    icon: 'lock_open',
    linkParent: '/app/pages/todo',
  },
  {
    key: 'settings',
    name: 'Settings',
    icon: 'settings',
    child: [
      {
        key: 'Profile',
        name: 'Profile',
        icon: 'person',
        link: '/app/pages/user-profile',
      },
      {
        key: 'Change Password',
        name: 'Change Password',
        icon: 'lock',
        link: '/app/pages/change-password',
      },
    ]
  },
  {
    key: 'help',
    name: 'Help',
    icon: 'help_outline',
    linkParent: '/app/widgets/help',
  },
];
