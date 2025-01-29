import { ReactNode } from 'react';

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export interface MenuItemsProps {
  title: string;
  icon: ReactNode;
  path: string;
  submenu?: MenuItemsProps[];
}
