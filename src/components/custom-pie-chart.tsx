import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Bill Expense', value: 15, color: '#FC7900' },
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Investment', value: 20, color: '#396AFF' },
  { name: 'Others', value: 35, color: '#232323' },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor='middle'
      // dominantBaseline='central'
      fontSize={12}
    >
      <tspan x={x} dy='-10' fontWeight='bold'>{`${(percent * 100).toFixed(
        0,
      )}%`}</tspan>{' '}
      <tspan x={x} dy='15'>
        {data[index].name}
      </tspan>{' '}
    </text>
  );
};

export const CustomPieChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          innerRadius={0}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
