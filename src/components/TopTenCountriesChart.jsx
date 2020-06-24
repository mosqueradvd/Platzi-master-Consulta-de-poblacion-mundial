import React from 'react';
import '../assets/styles/components/TopTenCountriesChart.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const TopTenCountriesChart = ({ data }) => {
  const dataArray = [];
  data.slice(0, 10).map((item) => {
    dataArray.push({
      rank: item.rank,
      country: item.country,
      population: item.population,
    });
  });
  return (
    <div className='wrappChart'>
      <div style={{ width: '100%', height: 400 }}>
        <h1>Top Ten Countries Chart</h1>
        <ResponsiveContainer>
          <LineChart
            /* width={800}
            height={400} */
            data={dataArray}
            margin={{ top: 50, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis dataKey='country' />
            <YAxis domain={[69787873, 1600000000]} />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend verticalAlign='top' height={30} />
            <Line
              type='monotone'
              dataKey='population'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopTenCountriesChart;
