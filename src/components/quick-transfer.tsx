import { useState } from 'react';

const transferDetail = [
  {
    img: '/images/carousel-img.svg',
    name: 'Jhon',
    position: 'employee',
  },
  {
    img: '/images/ceo-img.svg',
    name: 'Livia Bator',
    position: 'CEO',
  },
  {
    img: '/images/director-img.svg',
    name: 'Livia Bator',
    position: 'Director',
  },
  {
    img: '/images/designer-img.svg',
    name: 'Livia Bator',
    position: 'Designer',
  },
  {
    img: '/images/employee-img.svg',
    name: 'Livia Bator',
    position: 'Employee',
  },
];
export const QuickTransfer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % transferDetail.length);
  };

  const getVisibleItems = () => {
    return [
      transferDetail[startIndex],
      transferDetail[(startIndex + 1) % transferDetail.length],
      transferDetail[(startIndex + 2) % transferDetail.length],
    ];
  };

  return (
    <div className='flex max-w-xl flex-col px-6 py-[35px]'>
      <div className='flex items-center gap-4 sm:gap-8'>
        {getVisibleItems().map((item, index) => (
          <div key={index} className='text-center'>
            <img
              src={item.img}
              alt={item.name}
              className='mx-auto size-10 rounded-full sm:size-[70px]'
            />
            <h2 className='mt-2 text-xs font-semibold text-[#232323] hover:font-bold sm:text-lg'>
              {item.name}
            </h2>
            <p className='text-[#718EBF] hover:font-bold'>{item.position}</p>
          </div>
        ))}
        <button
          className='flex size-7 items-center justify-center rounded-full shadow-md sm:size-[50px]'
          onClick={nextSlide}
        >
          <img src='/icons/next-icon.svg' />
        </button>
      </div>
      <div className='flex items-center gap-2 pt-7 sm:gap-6'>
        <p className='text-base font-normal text-[#718EBF]'>Write Amount</p>
        <div className='flex gap-9 rounded-full bg-[#EDF1F7] sm:gap-14'>
          <p className='py-[15px] pl-[30px] text-base font-normal text-[#718EBF]'>
            525.50
          </p>
          <button className='flex items-center gap-1 rounded-full bg-[#232323] px-6 text-xs font-medium text-white sm:gap-2 sm:text-base'>
            Send
            <img src='/icons/send-icon.svg' className='size-4 sm:size-6' />
          </button>
        </div>
      </div>
    </div>
  );
};
