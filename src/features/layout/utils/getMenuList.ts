interface Menu {
  label: string;
  active: boolean;
  href: string;
  icon: string;
  activeIcon: string;
  disabled: boolean;
}

export function getMenuList(pathname: string): Array<Menu> {
  return [
    {
      label: 'Dashboard',
      href: '/',
      icon: '/public/icons/dashboard.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/',
      disabled: false,
    },
    {
      label: 'Transactions',
      href: '/transactions',
      icon: '/public/icons/transaction.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/transactions',
      disabled: true,
    },
    {
      label: 'Accounts',
      href: '/accounts',
      icon: '/public/icons/accounts.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/accounts',
      disabled: true,
    },
    {
      label: 'Investments',
      href: '/investments',
      icon: '/public/icons/investments.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/Investments',
      disabled: true,
    },
    {
      label: 'Credit Cards',
      href: '/Credit-cards',
      icon: '/public/icons/credit-cards.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/Credit-cards',
      disabled: true,
    },
    {
      label: 'Loans',
      href: '/loans',
      icon: '/public/icons/loans.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/loans',
      disabled: true,
    },
    {
      label: 'Services',
      href: '/services',
      icon: '/public/icons/services.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/services',
      disabled: true,
    },
    {
      label: 'My Privileges',
      href: '/my-privileges',
      icon: '/public/icons/my-privileges.svg',
      activeIcon: '/public/icons/dashboard-active.svg',
      active: pathname === '/my-privileges',
      disabled: true,
    },
    {
      label: 'Setting',
      href: '/setting',
      icon: '/public/icons/setting.svg',
      activeIcon: '/public/icons/setting-active.svg',
      active: pathname === '/setting',
      disabled: false,
    },
  ];
}
