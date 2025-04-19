const defaultMenu = [
  {
    key: "home",
    name: "Dashboard",
    icon: "dashboard",
    linkParent: "/app/dashboard",
  },
  {
    key: "trading-details",
    name: "Trading Details",
    icon: "bar_chart",
    child: [
      {
        key: "trade-orders",
        name: "Trade Orders",
        icon: "list_alt",
        link: "/app/tables/trade-orders",
      },
      {
        key: "trade-signals",
        name: "Trade Signals",
        icon: "timeline",
        link: "/app/tables/trade-signals",
      },
    ],
  },
  {
    key: "trading-status",
    name: "Trading Status",
    icon: "show_chart",
    linkParent: "/app/tables/trading-status",
  },
  {
    key: "Marketplace",
    name: "Marketplace",
    icon: "storefront",
    linkParent: "/app/widgets/marketplace",

  },
  {
    key: "broker-response",
    name: "Broker Response",
    icon: "receipt_long",
    linkParent: "/app/widgets/broker-response",
  },
  {
    key: "subscription",
    name: "Subscription",
    icon: "subscriptions",
    linkParent: "/app/dashboard/crypto",
  },
  {
    key: "Notification",
    name: "Notification",
    icon: "notifications",
    linkParent: "/app/pages/user-notifications",
  },
  {
    key: "connect-broker",
    name: "Connect Broker",
    icon: "link",
    child: [
      {
        key: "AngelOne",
        name: "AngelOne",
        icon: "business_center",
        link: "/app/ui/card-papper",
      },
      {
        key: "Aliceblue",
        name: "Aliceblue",
        icon: "show_chart",
        link: "/app/ui/accordion",
      },
      {
        key: "Zerodha",
        name: "Zerodha",
        icon: "track_changes",
        link: "/app/ui/tree-view",
      },
      {
        key: "Shoonya",
        name: "Shoonya",
        icon: "insights",
        link: "/app/ui/tabs",
      },
      {
        key: "Fyers",
        name: "Fyers",
        icon: "multiline_chart",
        link: "/app/ui/drawer-menu",
      },
    ],
  },
  {
    key: "login-status",
    name: "Login Status",
    icon: "lock_open",
    linkParent: "/app/pages/todo",
  },
  {
    key: "settings",
    name: "Settings",
    icon: "settings",
    child: [
      {
        key: "Profile",
        name: "Profile",
        icon: "person",
        link: "/app/pages/user-profile",
      },
      {
        key: "Change Password",
        name: "Change Password",
        icon: "lock",
        link: "/app/pages/change-password",
      },
    ],
  },
  {
    key: "help",
    name: "Help",
    icon: "help_outline",
    linkParent: "/app/widgets/help",
  },
];

const superAdminMenu = [
  {
    key: "dashboard",
    name: "Dashboard",
    icon: "dashboard",
    linkParent: "/app/dashboard",
  },
  {
    key: "clients",
    name: "Clients",
    icon: "people",
    linkParent: "/app/admin/users",
  },
  {
    key: "subAdmin",
    name: "Sub Admin",
    icon: "supervisor_account",
    linkParent: "/app/admin/sub-admin",
  },
  {
    key: "tradeDetails",
    name: "TRADE DETAILS",
    icon: "trending_up",
    linkParent: "/app/admin/trade-details",
  },
  {
    key: "scriptManagement",
    name: "Script Management",
    icon: "description",
    linkParent: "/app/admin/script-management",
  },
  {
    key: "license",
    name: "License",
    icon: "verified_user",
    linkParent: "/app/admin/license",
  },
  {
    key: "login-status",
    name: "Login Status",
    icon: "lock_open",
    linkParent: "/app/pages/todo",
  },
  {
    key: "more",
    name: "More",
    icon: "more_horiz",
    linkParent: "/app/admin/more",
  },
];

const getMenuByUserType = () => {
  const userType = localStorage.getItem("user_type") || "default";
  return userType === "superadmin" ? superAdminMenu : defaultMenu;
};

module.exports = getMenuByUserType();
