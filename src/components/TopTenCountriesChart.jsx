import React from 'react';
import '../assets/styles/App.scss';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

/* const TopTenCountriesChart = () => { */
const TopTenCountriesChart = ({ data }) => {
  console.log(data)
  return (
    <div className='wrappChart'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 50, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='rank' />
        <YAxis />
        <Area type='monotone' dataKey='population' stackId='1' stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='population' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='population' stackId='1' stroke='#ffc658' fill='#ffc658' />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

export default TopTenCountriesChart;
