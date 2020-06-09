import React from 'react';
import '../assets/styles/App.scss';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

/* const TopTenCountriesChart = ({ data }) => ( */
const TopTenCountriesChart = () => {

  const data = [
    {
      'id': 1,
      'country': 'China',
      'population': 1439323776,
      'yearly_change': 0.39,
      'net_change': 5540390,
      'density_p_km2': 153,
      'land_area': 9388211,
      'migrants_net': -348399,
      'fert_net': 1.7,
      'med_age': 38,
      'urban_pop': 61,
      'world_share': 18.47,
    }, {
      'id': 2,
      'country': 'India',
      'population': 1380004385,
      'yearly_change': 0.99,
      'net_change': 13586631,
      'density_p_km2': 464,
      'land_area': 2973190,
      'migrants_net': -532687,
      'fert_net': 2.2,
      'med_age': 28,
      'urban_pop': 35,
      'world_share': 17.70,
    }, {
      'id': 3,
      'country': 'United States',
      'population': 331002651,
      'yearly_change': 0.59,
      'net_change': 1937734,
      'density_p_km2': 36,
      'land_area': 9147420,
      'migrants_net': 954806,
      'fert_net': 1.8,
      'med_age': 38,
      'urban_pop': 83,
      'world_share': 4.25,
    }, {
      'id': 4,
      'country': 'Indonesia',
      'population': 273523615,
      'yearly_change': 1.07,
      'net_change': 2898047,
      'density_p_km2': 151,
      'land_area': 1811570,
      'migrants_net': -98955,
      'fert_net': 2.3,
      'med_age': 30,
      'urban_pop': 56,
      'world_share': 3.51,
    }, {
      'id': 5,
      'country': 'Pakistan',
      'population': 220892340,
      'yearly_change': 200,
      'net_change': 4327022,
      'density_p_km2': 287,
      'land_area': 770880,
      'migrants_net': -233379,
      'fert_net': 3.6,
      'med_age': 23,
      'urban_pop': 35,
      'world_share': 2.83,
    }, {
      'id': 6,
      'country': 'Brazil',
      'population': 212559417,
      'yearly_change': 0.72,
      'net_change': 1509890,
      'density_p_km2': 25,
      'land_area': 8358140,
      'migrants_net': 21200,
      'fert_net': 1.7,
      'med_age': 33,
      'urban_pop': 88,
      'world_share': 2.73,
    }, {
      'id': 7,
      'country': 'Nigeria',
      'population': 206139589,
      'yearly_change': 2.58,
      'net_change': 5175990,
      'density_p_km2': 226,
      'land_area': 91070,
      'migrants_net': -60000,
      'fert_net': 5.4,
      'med_age': 18,
      'urban_pop': 52,
      'world_share': 2.64,
    }, {
      'id': 8,
      'country': 'Bangladesh',
      'population': 164689383,
      'yearly_change': 1.01,
      'net_change': 1643222,
      'density_p_km2': 1265,
      'land_area': 130170,
      'migrants_net': -369501,
      'fert_net': 2.1,
      'med_age': 28,
      'urban_pop': 39,
      'world_share': 2.11,
    }, {
      'id': 9,
      'country': 'Russia',
      'population': 145934462,
      'yearly_change': 0.04,
      'net_change': 62206,
      'density_p_km2': 9,
      'land_area': 16376870,
      'migrants_net': 182456,
      'fert_net': 1.8,
      'med_age': 40,
      'urban_pop': 74,
      'world_share': 1.87,
    }, {
      'id': 10,
      'country': 'Mexico',
      'population': 128932753,
      'yearly_change': 1.06,
      'net_change': 1357224,
      'density_p_km2': 66,
      'land_area': 1943950,
      'migrants_net': -60000,
      'fert_net': 2.1,
      'med_age': 29,
      'urban_pop': 84,
      'world_share': 1.65,
    },
  ];

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
        <XAxis dataKey='country' />
        <YAxis />
        <Area type='monotone' dataKey='med_age' stackId='1' stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='med_age' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='med_age' stackId='1' stroke='#ffc658' fill='#ffc658' />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

export default TopTenCountriesChart;
