import countryServices from "../services/countries";
function CountrySearch(props) {
  const { countryNames, setCountryNames } = props;

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    countryServices.getAll().then((response) => {
      const countryNames = response
        .map((currentCountry) => {
          return currentCountry.name.common;
        })
        .filter((currentCountryName) => {
          if (currentCountryName.includes(event.target.value)) {
            return currentCountryName;
          }
        });
      console.log(countryNames);
      setCountryNames(countryNames);
    });
  };
  return (
    <form>
      Find Countries: <input onChange={handleSearch}></input>
    </form>
  );
}

export default CountrySearch;
