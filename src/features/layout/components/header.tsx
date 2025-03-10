import { NavLink } from 'react-router';
import { useState } from 'react';
import { Sidebar } from './sidebar';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='flex sm:flex-row flex-col sm:justify-between items-center px-10 py-5'>
        <div className='w-full flex items-center justify-between sm:hidden'>
          <button
            className='p-2 bg-white rounded-full'
            onClick={() => setIsOpen(true)}
          >
            {!isOpen ? <img src='/icons/hamburger-icon.svg' /> : ''}
          </button>

          <h1 className='text-[28px] font-semibold text-[#343C6A]'>Overview</h1>

          <div className='size-[50px] rounded-full overflow-hidden'>
            <img
              src='/public/images/user.png'
              alt='user'
              className='object-cover size-full'
            />
          </div>
        </div>

        <div className='hidden sm:flex w-full justify-between items-center'>
          <h1 className='text-[28px] font-semibold text-[#343C6A]'>Overview</h1>
          <div className='flex sm:items-center gap-[30px]'>
            <input
              type='text'
              placeholder='Search for something'
              className='sm:block hidden bg-[#F5F7FA] rounded-2xl px-6 py-2'
            />
            <NavLink
              className='size-[50px] hidden sm:flex justify-center items-center rounded-full bg-[#F5F7FA]'
              to='/setting'
            >
              <img
                src='/icons/setting-outline.svg'
                alt='setting'
                aria-label='setting'
              />
            </NavLink>
            <button className='size-[50px] hidden sm:flex justify-center items-center rounded-full bg-[#F5F7FA]'>
              <img
                src='/icons/notification.svg'
                alt='notification'
                aria-label='notification'
              />
            </button>
            <div className='size-[60px] rounded-full overflow-hidden'>
              <img
                src='/public/images/user.png'
                alt='user'
                className='object-cover size-full'
              />
            </div>
          </div>
        </div>

        <input
          type='text'
          placeholder='Search for something'
          className='sm:hidden block bg-[#F5F7FA] px-6 rounded-2xl py-2 mt-4'
        />
      </header>

      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
