import React from "react";
import "../assets/styles/components/WorldPopulationRegion.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataBurned = [
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
];

const WorldPopulationRegion = () => {
  // console.log(dataBurned);
  return (
    <div className="cambiarNombreDeClase">
      <div style={{ width: '100%', height: 500 }}>
        <h1>Chart WorldPopulation by Region</h1>
        <ResponsiveContainer>
          <BarChart
            /* width={900}
            height={500} */
            data={dataBurned}
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
              label={{ position: 'top' }}
            />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorldPopulationRegion;
