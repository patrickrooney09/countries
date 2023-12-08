import { useState, useEffect } from "react";
import "./index.css";
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import countryServices from "./services/countries";

function App() {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    countryServices.getAll().then((initialCountries) => {
      console.log(initialCountries);
      setCountryNames(
        initialCountries.map((currentCountry) => {
          return currentCountry.name.common;
        })
      );
    });
    console.log("country names", countryNames);
  }, []);
  return (
    <>
      <CountrySearch
        countryNames={countryNames}
        setCountryNames={setCountryNames}
      />
      <CountryList countryNames={countryNames} />
      {/* {countryNames.map((currentCountry, index) => {
        return <div key={index}>{currentCountry}</div>;
      })} */}
    </>
  );
}

export default App;
