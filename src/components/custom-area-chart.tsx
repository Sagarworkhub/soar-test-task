import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jul',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Aug',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Sep',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Oct',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Nov',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dec',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jan',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const CustomAreaChart = () => {
  return (
    <div className='h-[225px]  sm:h-[276px] sm:w-[635px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          // width={800}
          // height={400}
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 0,
            bottom: 5,
          }}
          barCategoryGap='40%'
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='0%'
                stopColor='rgba(45, 96, 255, 0.25)'
                stopOpacity={1}
              />
              <stop
                offset='100%'
                stopColor='rgba(45, 96, 255, 0)'
                stopOpacity={1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            stroke='#1814F3'
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
