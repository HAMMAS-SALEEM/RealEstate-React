import { useEffect, useState } from 'react';
import { City } from 'country-state-city';

const useCities = (countryIsoCode, stateIsoCode) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (countryIsoCode && stateIsoCode) {
      const cityData = City.getCitiesOfState(countryIsoCode, stateIsoCode);
      setCities(cityData);
    }
  }, [countryIsoCode, stateIsoCode]);

  return cities;
};

export default useCities;
