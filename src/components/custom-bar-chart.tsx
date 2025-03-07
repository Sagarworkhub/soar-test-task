// export const CustomBarChart = () => {
//   return (
//     <ResponsiveContainer width='100%' height='100%'>
//       <RechartsBarChart
//         width={800}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 10,
//           left: 10,
//           bottom: 5,
//         }}
//       >
//         <Legend verticalAlign='top' align='right' height={36} />
//         <XAxis dataKey='name' axisLine={false} tickLine={false} />
//         <YAxis axisLine={false} tickLine={false} />
//         <CartesianGrid stroke='#F3F3F5' vertical={false} />
//         <Tooltip />
//         <Bar
//           dataKey='uv'
//           fill='#232323'
//           radius={[50, 50, 50, 50]}
//           barSize={20}
//         />
//         <Bar
//           dataKey='pv'
//           fill='#396AFF'
//           radius={[50, 50, 50, 50]}
//           barSize={20}
//         />
//       </RechartsBarChart>
//     </ResponsiveContainer>
//   );
// };
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { type LegendProps } from 'recharts';

// import {
//   Bar,
//   CartesianGrid,
//   Legend,
//   BarChart as RechartsBarChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';

const data = [
  {
    name: 'Sat',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sun',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mon',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Tue',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Wed',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Thu',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Fri',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomLegend = (props: LegendProps) => {
  const { payload } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '15px',
        paddingRight: '20px',
      }}
    >
      {payload.map((entry: any, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              display: 'inline-block',
              backgroundColor: entry.color,
              marginRight: 8,
            }}
          ></span>
          {entry.value}
        </div>
      ))}
    </div>
  );
};

export const CustomBarChart = () => {
  return (
    <div className='h-[300px] sm:h-[322px] sm:w-[730px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barCategoryGap='40%'
        >
          <Legend
            content={<CustomLegend />}
            verticalAlign='top'
            align='right'
            height={36}
          />
          <XAxis dataKey='name' tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid stroke='#F3F3F5' vertical={false} />
          <Tooltip />
          <Bar
            dataKey='uv'
            fill='#232323'
            radius={[50, 50, 50, 50]}
            barSize={window.innerWidth < 768 ? 10 : 20}
          />
          <Bar
            dataKey='pv'
            fill='#396AFF'
            radius={[50, 50, 50, 50]}
            barSize={window.innerWidth < 768 ? 10 : 20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
