import { menuItems } from './constants';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SidebarMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  const settingsItem = menuItems.find(item => item.path === '/settings');
  const otherItems = menuItems.filter(item => item.path !== '/settings');

  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6 flex flex-col justify-between h-[calc(100vh-100px)]">
        <div>
          <h3 className="mb-4 text-sm font-semibold text-bodydark2">MENU</h3>
          <ul className="mb-6 flex flex-col gap-1.5">
            {otherItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname === item.path ? 'bg-graydark dark:bg-meta-4' : ''
                    }`}
                  onClick={() => item.submenu && item.submenu.length && handleSubmenuToggle(item.path)}
                >
                  {item.icon}
                  {item.title}
                </NavLink>
                {item.submenu && item.submenu.length > 0 && openSubmenu === item.path && (
                  <ul className="ml-4 mt-2 flex flex-col gap-1.5">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink
                          to={subItem.path}
                          className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname === subItem.path ? 'bg-graydark dark:bg-meta-4' : ''
                            }`}
                        >
                          {subItem.icon}
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <hr className="my-4 border-t border-gray-200 dark:border-gray-700" />
          {settingsItem && (
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to={settingsItem.path}
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname === settingsItem.path ? 'bg-graydark dark:bg-meta-4' : ''
                    }`}
                  onClick={() => handleSubmenuToggle(settingsItem.path)}
                >
                  {settingsItem.icon}
                  {settingsItem.title}
                </NavLink>
                {openSubmenu === settingsItem.path && (
                  <ul className="ml-4 mt-2 flex flex-col gap-1.5">
                    {settingsItem.submenu && settingsItem.submenu.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink
                          to={subItem.path}
                          className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname === subItem.path ? 'bg-graydark dark:bg-meta-4' : ''
                            }`}
                        >
                          {subItem.icon}
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
