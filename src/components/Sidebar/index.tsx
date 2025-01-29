import { useRef } from 'react';
import { SidebarProps } from './types';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLElement>(null);

  return (
    <aside
      ref={sidebarRef}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <SidebarHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
