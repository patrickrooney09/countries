function CountryList(props) {
  const { countryNames } = props;
  return (
    <ul>
      {countryNames.map((currentCountry, index) => {
        return <li key={index}>{currentCountry}</li>;
      })}
    </ul>
  );
}

export default CountryList;
