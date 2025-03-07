import { NavLink } from 'react-router';
export const Header = () => {
  return (
    <header className='flex sm:flex-row flex-col  sm:justify-between items-center px-10 py-5'>
      <h1 className='text-[28px] font-semibold text-[#343C6A]'>Overview</h1>
      <div className='flex sm:flex-row flex-col sm:items-center gap-[30px]'>
        <input
          type='text'
          placeholder='Search for something'
          className='sm:block hidden bg-[#F5F7FA ]'
        />
        <NavLink
          className='size-[50px] hidden sm:flex justify-center items-center rounded-full bg-[#F5F7FA]'
          to='/setting'
        >
          <img
            src='/public/icons/setting-outline.svg'
            alt='setting'
            aria-label='setting'
          />
        </NavLink>
        <button className='size-[50px] hidden sm:flex justify-center items-center rounded-full bg-[#F5F7FA]'>
          <img
            src='/public/icons/notification.svg'
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
      <input
        type='text'
        placeholder='Search for something'
        className='sm:hidden block bg-[#F5F7FA]px-2 py-1'
      />
    </header>
  );
};
