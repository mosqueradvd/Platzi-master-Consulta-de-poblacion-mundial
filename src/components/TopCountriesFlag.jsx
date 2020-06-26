import React from 'react';
import '../assets/styles/components/TopCountriesFlag.scss';

const TopTenBoard = ({ data }) => {

  return (
    <>
      <section className="contenedor">
        <div>
          <h2>TOP 10 LARGEST COUNTRIESBY POPULATION</h2>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="table__number">No</th>
                <th>Flag</th>
                <th>Country</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ctry) => {
                if (ctry.rank <= 10) {
                  return (
                    <tr className="country__container" key={ctry.rank}>
                      <th>{ctry.rank}</th>
                      <th>
                        <img src={ctry.flag} alt={ctry.country} />
                      </th>
                      <th>{ctry.country}</th>
                      <th>{ctry.population}</th>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TopTenBoard;
