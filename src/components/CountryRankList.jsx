import React from "react";

function CountryRankList({ countries, handleDeleteCountry }) {
  return (
    <>
      <div className="medal-list-title">
        <span>국가명</span>
        <span>금메달</span>
        <span>은메달</span>
        <span>동메달</span>
        <span>액션</span>
      </div>
      {countries.map((country) => (
        <ul key={country.name}>
          <li>{country.name}</li>
          <li>{country.gold}</li>
          <li>{country.silver}</li>
          <li>{country.bronze}</li>
          <li>
            <button
              onClick={() => handleDeleteCountry(country.name)}
              className="delete-button"
            >
              삭제
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default CountryRankList;
