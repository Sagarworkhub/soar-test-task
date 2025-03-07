import { NavLink, useLocation } from 'react-router';
import { getMenuList } from '../utils/getMenuList';
import { useState } from 'react';

export const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Get the full current path
  const currentPath = location.pathname;

  const menuList = getMenuList(currentPath);

  return (
    <>
      <button
        className='sm:hidden fixed top-5 left-5 z-50 p-2 bg-white shadow-md rounded-full'
        onClick={() => setIsOpen(true)}
      >
        <img src='/icons/hamburger-icon.svg' />
      </button>
      <aside className='w-[250px] border-r border-[#E6EFF5] h-screen'>
        <div className='flex gap-2.5 pt-[31px] pb-[34px] justify-center'>
          <img
            src='/public/icons/logo.svg'
            alt='logo'
            aria-label='logo'
            className='size-[35px]'
          />
          <h1 className='text-[25px] font-extrabold text-[#343C6A         ]'>
            Soar Task
          </h1>
        </div>
        {menuList.map((item) => {
          return (
            <div className={'flex gap-11 items-center'}>
              <div
                className={`w-[6px] h-[60px] rounded-r-[10px] ${
                  item.active ? 'bg-black' : 'bg-transparent'
                }`}
              />
              {item.disabled ? (
                <div className={'flex gap-[26px] items-center'}>
                  <img src={item.active ? item.activeIcon : item.icon} />
                  <p className='text-lg font-medium text-[#B1B1B1]'>
                    {item.label}
                  </p>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={'flex gap-[26px] items-center'}
                >
                  <img src={item.active ? item.activeIcon : item.icon} />
                  <p
                    className={`text-lg font-medium ${
                      item.active ? 'text-[#232323]' : 'text-[#B1B1B1]'
                    }`}
                  >
                    {item.label}
                  </p>
                </NavLink>
              )}
            </div>
          );
        })}
      </aside>
    </>
  );
};
