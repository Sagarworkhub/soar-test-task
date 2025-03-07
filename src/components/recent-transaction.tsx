const RecentTransactionDetail = [
  {
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '+$850',
    img: '/icons/deposit-icon.svg',
  },
  {
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '-$2500',
    img: '/icons/dollar-icon.svg',
  },
  {
    title: 'Jemi Wilson',
    date: '15 January 2021',
    amount: '+3400',
    img: '/icons/paypal-icon.svg',
  },
  // {
  //   title: 'Deposit from my Card',
  //   date: 'date',
  //   amount: '+$2500',
  //   img: '/icons/deposit-icon.svg',
  // },
];
export const RecentTransaction = () => {
  return (
    <div className='w-full max-w-sm rounded-3xl'>
      <div className='flex rounded-2xl p-[25px]'>
        <div className='flex flex-col'>
          {RecentTransactionDetail.map((item, index) => {
            const isCredited = item.amount.startsWith('+');
            const amountColor = isCredited ? 'text-green-500' : 'text-red-500';

            return (
              <div
                key={index}
                className='flex items-center justify-between gap-3 py-3'
              >
                <div className='relative size-14 rounded-full bg-[#FFF5D9]'>
                  <img src={item.img} className='absolute left-4 top-5' />
                </div>
                <div className='flex grow flex-col'>
                  <p className='text-base font-medium text-[#232323]'>
                    {item.title}
                  </p>
                  <p className='text-[15px] font-normal text-[#718EBF]'>
                    {item.date}
                  </p>
                </div>
                <p className={`text-sm font-medium ${amountColor}`}>
                  {item.amount}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
