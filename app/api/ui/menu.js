module.exports = [
  {
    key: 'home',
    name: 'Dashboard',
    icon: 'home',
    link: '/app',
    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        link: '/app',
        icon: 'business',
        badge: 'Hot'
      },
    ]
  },
  {
    key: 'Marketplace',
    name: 'Marketplace',
    icon: 'widgets',
    child: [
      {
        key: 'static_apps',
        name: 'Group 1',
        title: true,
      },
      {
        key: 'contact',
        name: 'Option 2',
        icon: 'perm_contact_calendar',
        link: '/app/pages/contact'
      },
      {
        key: 'email',
        name: 'Option 3',
        icon: 'mail',
        link: '/app/pages/email',
        badge: '4'
      },
      {
        key: 'firebase_apps',
        name: 'Group 1',
        title: true,
      },
      {
        key: 'todo_fullstack',
        name: 'Option 1',
        icon: 'check_circle',
        link: '/app/pages/todo-firebase',
      },
      {
        key: 'contact_fullstack',
        name: 'Option 2',
        icon: 'perm_contact_calendar',
        link: '/app/pages/contact-firebase'
      },
      {
        key: 'email_fullstack',
        name: 'Option 3',
        icon: 'mail',
        link: '/app/pages/email-firebase',
      },
    ]
  },
  {
    key: 'Signals',
    name: 'Signals',
    icon: 'important_devices',
    child: [
      {
        key: 'landing_page',
        name: 'Landing Page',
        title: true,
      },
      {
        key: 'todo',
        name: 'Option 1',
        icon: 'check_circle',
        link: '/app/containers/Tables/SignalsTable',
      },
    ]
  },
  {
    key: 'Subscription',
    name: 'Subscription',
    icon: 'Subscription',
    child: [
      {
        key: 'banknifty',
        name: 'BankNifty',
        link: '/app/dashboard/crypto',
        icon: 'business',
        badge: 'Hot'
      },
    ]
  },
  {
    key: 'Notification',
    name: 'Notification',
    icon: 'border_color',
    child: [
      {
        key: 'landing_page',
        name: 'Landing Page',
        title: true,
      },
      {
        key: 'corporate',
        name: 'Corporate',
        link: '/',
        icon: 'business',
        badge: 'Hot'
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key: 'personal',
        name: 'Analytic',
        icon: 'settings_brightness',
        link: '/app'
      },
      {
        key: 'crm',
        name: 'Marketing',
        icon: 'settings_system_daydream',
        link: '/app/dashboard/marketing'
      },
      {
        key: 'crypto',
        name: 'Cryptocurrency',
        icon: 'local_atm',
        link: '/app/dashboard/crypto'
      },
      {
        key: 'widgets',
        name: 'Widgets',
        title: true,
      },
      {
        key: 'infographics_widget',
        icon: 'timelapse',
        name: 'Infographics',
        link: '/app/widgets/infographics'
      },
      {
        key: 'status_widget',
        icon: 'nature_people',
        name: 'Status',
        link: '/app/widgets/status'
      },
      {
        key: 'analytics_widget',
        icon: 'insert_chart',
        name: 'Analytics',
        link: '/app/widgets/analytics'
      },
      {
        key: 'mini_apps_widget',
        icon: 'web',
        name: 'Mini Apps',
        link: '/app/widgets/mini-apps'
      },
      {
        key: 'gallery_widget',
        icon: 'satellite',
        name: 'Gallery',
        link: '/app/widgets/gallery-carousel'
      },
      {
        key: 'material_font_icon',
        name: 'Fonts & Icons',
        title: true,
      },
      {
        key: 'typography',
        name: 'Typography',
        icon: 'font_download',
        link: '/app/ui/typography'
      },
      {
        key: 'icons',
        name: 'Material Icons',
        icon: 'bookmark',
        link: '/app/ui/icons'
      },
      {
        key: 'layouts',
        name: 'Layouts',
        title: true,
      },
      {
        key: 'grid',
        name: 'Grid',
        icon: 'view_column',
        link: '/app/layouts/grid'
      },
      {
        key: 'application_layout',
        name: 'App Layout',
        icon: 'web',
        link: '/app/layouts/app-layout'
      },
      {
        key: 'responsive',
        name: 'Responsive',
        icon: 'mobile_friendly',
        link: '/app/layouts/responsive'
      }
    ]
  },
  {
    key: 'Api Connection',
    name: 'Api Connection',
    icon: 'extension',
    child: [
      {
        key: 'AngelOne',
        name: 'AngelOne',
        icon: 'view_quilt',
        link: '/app/ui/card-papper'
      },
      {
        key: 'Aliceblue',
        name: 'Aliceblue',
        icon: 'view_day',
        link: '/app/ui/accordion'
      },
      {
        key: 'Zerodha',
        name: 'Zerodha',
        icon: 'subdirectory_arrow_right',
        link: '/app/ui/tree-view'
      },
      {
        key: 'Shoonya',
        name: 'Shoonya',
        icon: 'tab',
        link: '/app/ui/tabs'
      },
      {
        key: 'Fyers',
        name: 'Fyers',
        icon: 'vertical_split',
        link: '/app/ui/drawer-menu'
      }
    ]
  },
  {
    key: 'settings',
    name: 'settings',
    icon: 'sort',
    child: [
      {
        key: 'Profile',
        name: 'Profile',
        icon: 'check_circle',
        link: '/app/pages/todo',
      },
      {
        key: 'Change Password',
        name: 'Change Password',
        icon: 'perm_contact_calendar',
        link: '/app/pages/contact'
      },
      {
        key: 'Notification',
        name: 'Notification',
        icon: 'mail',
        link: '/app/pages/email',
        badge: '4'
      },
    ]
  },
];
