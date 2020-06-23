import React from "react";

const TopCountriesFlag = () => (
  <div className="top__countries">
    <h1>TOP 10 LARGEST COUNTRIES BY POPULATION</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Flag</th>
          <th>Country</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>{/* ponerFlag() */}</tbody>
    </table>
  </div>
);

export default TopCountriesFlag;
