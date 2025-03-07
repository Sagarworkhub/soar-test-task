import { CustomAreaChart } from '../../components/custom-area-chart';
import { CustomBarChart } from '../../components/custom-bar-chart';
import { CustomCard1 } from '../../components/custom-card1';
import { CustomCard2 } from '../../components/custom-card2';
import { CustomPieChart } from '../../components/custom-pie-chart';
import { QuickTransfer } from '../../components/quick-transfer';
import { RecentTransaction } from '../../components/recent-transaction';

export const Dashboard = () => {
  return (
    <div className='px-10 py-7'>
      <div className='flex sm:flex-row flex-col gap-7'>
        <CustomCard1 />
        <CustomCard2 />
        <RecentTransaction />
      </div>
      <div className='flex sm:flex-row flex-col gap-7'>
        <div className=''>
          <h1 className='font-semibold text-2xl text-[#343C6A]'>
            Weekly Activity
          </h1>
          <CustomBarChart />
        </div>
        <div className='w-[350px] h-[322px]'>
          <h1 className='font-semibold text-2xl text-[#343C6A]'>
            Expense Statistics
          </h1>
          <CustomPieChart />
        </div>
      </div>
      <div className='flex sm:flex-row flex-col py-6 gap-7'>
        <div>
          <h1 className='font-semibold text-2xl text-[#343C6A]'>
            Quick Transfer
          </h1>

          <QuickTransfer />
        </div>
        <div>
          <h1 className='font-semibold text-2xl text-[#343C6A]'>
            Balance History{' '}
          </h1>

          <CustomAreaChart />
        </div>
      </div>
    </div>
  );
};
