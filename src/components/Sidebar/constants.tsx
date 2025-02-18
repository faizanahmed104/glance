import { DashboardIcon, SettingsIcon } from './icons';
import { MenuItemsProps } from './types';

export const menuItems: MenuItemsProps[] = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
    submenu: [],
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings',
    submenu: [
      {
        title: 'Profile',
        icon: <DashboardIcon />,
        path: '/settings/profile',
        submenu: [],
      },
      {
        title: 'Account',
        icon: <DashboardIcon />,
        path: '/settings/account',
        submenu: [],
      },
    ],
  },
];
