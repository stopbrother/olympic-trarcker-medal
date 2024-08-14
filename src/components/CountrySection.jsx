import React, { useState } from "react";
import CountryForm from "./CountryForm";
import CountryRankList from "./CountryRankList";

function CountrySection() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  const handleAddCountry = (event) => {
    event.preventDefault();
    const newCountry = {
      name: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    setCountries([...countries, newCountry]);
  };

  const handleUpdateCountry = (event) => {
    event.preventDefault();
    const countryToupdate = countries.map((countrited) => {
      if (countrited.name === country) {
        const updateMedal = {
          ...countrited,
          gold: gold,
          silver,
          silver,
          bronze,
          bronze,
        };
        return updateMedal;
      } else {
        alert("리스트에 없는 나라입니다.");
        return countrited;
      }
    });
    setCountries(countryToupdate);
  };

  const handleDeleteCountry = (name) => {
    setCountries(countries.filter((country) => country.name !== name));
  };

  const handleInputCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleInputGold = (event) => {
    setGold(event.target.value);
  };
  const handleInputSilver = (event) => {
    setSilver(event.target.value);
  };
  const handleInputBronze = (event) => {
    setBronze(event.target.value);
  };
  return (
    <>
      <CountryForm
        country={country}
        gold={gold}
        silver={silver}
        bronze={bronze}
        handleInputCountry={handleInputCountry}
        handleInputGold={handleInputGold}
        handleInputSilver={handleInputSilver}
        handleInputBronze={handleInputBronze}
        handleAddCountry={handleAddCountry}
        handleUpdateCountry={handleUpdateCountry}
      />
      <div>
        <CountryRankList
          countries={countries}
          handleDeleteCountry={handleDeleteCountry}
        />
      </div>
    </>
  );
}

export default CountrySection;
