import { DashboardIcon } from './icons';
import { MenuItemsProps } from './types';

export const menuItems: MenuItemsProps[] = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
    submenu: [],
  },
];
