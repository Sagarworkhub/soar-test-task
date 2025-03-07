export const CustomCard2 = () => {
  return (
    <div className='w-full h-min max-w-sm rounded-3xl border-[1px] border-[#DFEAF2]  to-black'>
      <div className='flex items-center justify-between p-6'>
        <div className='flex flex-col'>
          <p className='text-xs font-normal '>Balance</p>
          <p className='text-xl font-semibold '>$5,756</p>
        </div>
        <img src='/icons/Chip_Card2.svg' alt='chip icon' />
      </div>
      <div className='flex items-center justify-between px-6 pb-6 pt-3'>
        <div>
          <p className='text-xs font-normal'>CARD HOLDER</p>
          <p className='text-[15px] font-semibold'>Eddy Cusuma</p>
        </div>
        <div className='pr-28'>
          <p className='text-xs font-normal'>VALID THRU</p>
          <p className='text-[15px] font-semibold '>12/22c</p>
        </div>
      </div>
      <div className='py-6'>
        <div className='flex items-center justify-between px-6'>
          <p className='text-[22px] font-semibold'>3778 **** **** 1234</p>
          <img src='/icons/oval2.svg' />
        </div>
      </div>
    </div>
  );
};
