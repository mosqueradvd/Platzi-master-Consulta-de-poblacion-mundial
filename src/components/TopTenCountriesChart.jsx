import React from 'react';
import '../assets/styles/App.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

/* const TopTenCountriesChart = () => { */
const TopTenCountriesChart = ({ data }) => {
  console.log(data);
  return (
    <div className='wrappChart'>
      <LineChart
        width={1200}
        height={600}
        data={data}
        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey='country' />
        <YAxis domain={[69787873, 1600000000]} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='population'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default TopTenCountriesChart;
