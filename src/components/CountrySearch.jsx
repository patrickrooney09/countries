import countryServices from "../services/countries";
function CountrySearch(props) {
  const { countryNames, setCountryNames } = props;

  const handleSearch = (event) => {
    event.preventDefault();
    countryServices.getAll().then((response) => {
      const countryNames = response
        .map((currentCountry) => {
          return currentCountry.name.common;
        })
        .filter((currentCountryName) => {
          if (
            currentCountryName
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            return currentCountryName;
          }
        });
      console.log("search filter:", countryNames);
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
