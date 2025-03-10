import { NavLink, useLocation } from 'react-router';
import { getMenuList } from '../utils/getMenuList';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  // Get the full current path
  const currentPath = location.pathname;

  const menuList = getMenuList(currentPath);

  return (
    <>
      <aside
        className={`fixed top-0 left-0 min-h-screen h-full w-[280px] sm:w-[250px] border-r border-[#E6EFF5] bg-white transition-all transform duration-500 ease-in-out z-50
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static`}
      >
        <button
          className='sm:hidden absolute top-7 right-1 p-2 rounded-full'
          onClick={() => setIsOpen(false)}
        >
          <img src='/icons/Close.svg' alt='Close Sidebar' className='size-7' />
        </button>

        <div className='flex gap-2.5 pt-[31px] pb-[34px] justify-center'>
          <img
            src='/icons/logo.svg'
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
