import { useEffect, useState } from 'react';
import { State } from 'country-state-city';

const useStates = (countryIsoCode) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (countryIsoCode) {
      const stateData = State.getStatesOfCountry(countryIsoCode);
      setStates(stateData);
    }
  }, [countryIsoCode]);

  return states;
};

export default useStates;
