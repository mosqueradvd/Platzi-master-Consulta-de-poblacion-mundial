import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [population, setPopulation] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPopulation(data));
  }, []);
  return population;
};

export default useInitialState;
