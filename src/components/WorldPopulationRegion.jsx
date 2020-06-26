import React from 'react';
import '../assets/styles/components/WorldPopulationRegion.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/* const dataBurned = [
  { continent: "China", Population: 4000, amt: 2400 },
  { continent: "India", Population: 3000, amt: 2210 },
  { continent: "U.S.A", Population: 2000, amt: 2290 },
  { continent: "Indonesia", Population: 2780, amt: 2000 },
  { continent: "Pakistan", Population: 1890, amt: 2181 },
  { continent: "Brasil", Population: 2390, amt: 2500 },
  { continent: "Nigeria", Population: 3490, amt: 2100 },
  { continent: "Bangladesh", Population: 3490, amt: 2100 },
  { continent: "Rusia", Population: 3490, amt: 2100 },
  { continent: "México", Population: 3490, amt: 2100 },
]; */

const WorldPopulationRegion = ({ data }) => {
  const dataArray = [];

  /* variable.items[0].rank */
  // console.log(data.items);
  // console.log(typeof(data.items));

  if (typeof(data.items) !== 'undefined') {
    // console.log(data.items[0].continent);
    // console.log(data.items);
    data.items.map((item) => {
      dataArray.push({
        continent: item.rank,
        Population: item.population,
        /* rank: item.rank, */
      })
    })
  }
  console.log(dataArray);
  /* console.log(data.items.continent); */
  /* console.log(data.items); */
  /* console.log(Object.values(data)); */
  /* bridgeArray.push(Object.values(data)); */

  // const objectArray = Object.entries(data);
  // console.log(objectArray[0])
  /* data.items.map((otra) => {
    console.log(otra);
  }); */



  /* console.log('dataArray'); */
  {/* console.log(`dataArray -> ${dataArray}`); */}

  return (
    <div className="contaninerChart">
      <div>
        <h2>Chart WorldPopulation by Region</h2>
      </div>
      <div
        className="contaninerChart__table"
        
      >
        <ResponsiveContainer>
          <BarChart
            /* width={900}
              height={500} */
            data={dataArray}
            margin={{ top: 50, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="continent" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Population"
              fill="#82ca9d"
              background={{ fill: "#eee" }}
              label={{ position: "top" }}
            />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorldPopulationRegion;
