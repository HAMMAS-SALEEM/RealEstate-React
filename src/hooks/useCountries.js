import { useEffect, useState } from 'react';
import { Country } from 'country-state-city';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countryData = Country.getAllCountries();
      setCountries(countryData);
    };
    loadCountries();
  }, []);

  return countries;
};

export default useCountries;
