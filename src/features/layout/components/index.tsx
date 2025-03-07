import { Outlet } from 'react-router';
import { Header } from './header';
import { Sidebar } from './sidebar';

export const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
