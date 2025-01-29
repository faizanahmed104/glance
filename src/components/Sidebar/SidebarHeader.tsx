import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BackArrowIcon } from './icons';
import { SidebarProps } from './types';

const SidebarHeader = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink
        to="/"
        className="text-bold text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
      >
        GLANCE
      </NavLink>
      <button
        ref={triggerRef}
        onClick={() => setSidebarOpen(false)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <BackArrowIcon />
      </button>
    </div>
  );
};

export default SidebarHeader;