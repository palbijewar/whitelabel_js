module.exports = [
  {
    key: 'home',
    name: 'Dashboard',
    icon: 'home',
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
        key: 'todo',
        name: 'Option 1',
        icon: 'check_circle',
        link: '/app/pages/todo',
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
  },
  {
    key: 'Subscription',
    name: 'Subscription',
    icon: 'Subscription',
  },
  {
    key: 'Notification',
    name: 'Notification',
    icon: 'border_color',
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
