import { CustomAreaChart } from '../../components/custom-area-chart';
import { CustomBarChart } from '../../components/custom-bar-chart';
import { CustomCard1 } from '../../components/custom-card1';
import { CustomCard2 } from '../../components/custom-card2';
import { CustomPieChart } from '../../components/custom-pie-chart';
import { QuickTransfer } from '../../components/quick-transfer';
import { RecentTransaction } from '../../components/recent-transaction';

export const Dashboard = () => {
  return (
    <div className='px-10 py-7 space-y-7'>
      <div className='flex flex-col sm:flex-row gap-7'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold font-inter text-[#343C6A] text-[22px]'>
              My Cards
            </h1>
            <p className='font-semibold hover:font-extrabold font-inter text-[17px] text-[#343C6A] cursor-pointer'>
              See All
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-7'>
            <CustomCard1 />
            <CustomCard2 />
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='font-semibold font-inter text-[#343C6A] text-[22px]'>
            Recent Transactions
          </h1>
          <RecentTransaction />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-7'>
        <div className='space-y-4'>
          <h1 className='font-semibold font-inter  text-2xl text-[#343C6A]'>
            Weekly Activity
          </h1>
          <CustomBarChart />
        </div>
        <div className='w-[350px] h-[322px] space-y-4'>
          <h1 className='font-semibold text-2xl font-inter text-[#343C6A]'>
            Expense Statistics
          </h1>
          <CustomPieChart />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-7'>
        <div className='space-y-4'>
          <h1 className='font-semibold font-inter text-2xl text-[#343C6A]'>
            Quick Transfer
          </h1>
          <QuickTransfer />
        </div>
        <div className='space-y-4'>
          <h1 className='font-semibold font-inter text-2xl text-[#343C6A]'>
            Balance History
          </h1>
          <CustomAreaChart />
        </div>
      </div>
    </div>
  );
};
