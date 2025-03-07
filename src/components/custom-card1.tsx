export const CustomCard1 = () => {
  return (
    <div className='w-full h-min max-w-sm rounded-3xl bg-gradient-to-r from-[#5B5A6F] to-black'>
      <div className='flex items-center justify-between p-6'>
        <div className='flex flex-col'>
          <p className='text-xs font-normal text-white'>Balance</p>
          <p className='text-xl font-semibold text-white'>$5,756</p>
        </div>
        <img src='/icons/chip_icon.svg' alt='chip icon' />
      </div>
      <div className='flex items-center justify-between px-6 pb-6 pt-3'>
        <div>
          <p className='text-xs font-normal text-white'>CARD HOLDER</p>
          <p className='text-[15px] font-semibold text-white'>Eddy Cusuma</p>
        </div>
        <div className='pr-28'>
          <p className='text-xs font-normal text-white'>VALID THRU</p>
          <p className='text-[15px] font-semibold text-white'>12/22c</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.24)',
          backgroundImage:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
        className='py-6'
      >
        <div className='flex items-center justify-between px-6'>
          <p className='text-[22px] font-semibold text-white'>
            3778 **** **** 1234
          </p>
          <img src='/images/oval-img.svg' />
        </div>
      </div>
    </div>
  );
};
