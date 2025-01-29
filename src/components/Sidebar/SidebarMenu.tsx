import { menuItems } from './constants';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        <h3 className="mb-4 text-sm font-semibold text-bodydark2">MENU</h3>
        <ul className="mb-6 flex flex-col gap-1.5">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === item.path ? 'bg-graydark dark:bg-meta-4' : ''
                }`}
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
