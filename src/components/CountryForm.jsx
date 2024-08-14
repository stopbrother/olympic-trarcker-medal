import React from "react";

function CountryForm({
  country,
  gold,
  silver,
  bronze,
  handleInputCountry,
  handleInputGold,
  handleInputSilver,
  handleInputBronze,
  handleAddCountry,
  handleUpdateCountry,
}) {
  return (
    <form className="input-group">
      <div className="country">
        <label htmlFor="">국가명</label>
        <input
          onChange={handleInputCountry}
          value={country}
          type="text"
          placeholder="국가 입력"
        />
      </div>
      <div className="gold-medal">
        <label htmlFor="">금메달</label>
        <input onChange={handleInputGold} value={gold} type="text" />
      </div>
      <div className="silver-medal">
        <label htmlFor="">은메달</label>
        <input onChange={handleInputSilver} value={silver} type="text" />
      </div>
      <div className="bronze-medal">
        <label htmlFor="">동메달</label>
        <input onChange={handleInputBronze} value={bronze} type="text" />
      </div>
      <button onClick={handleAddCountry} className="add-button">
        국가 추가
      </button>
      <button onClick={handleUpdateCountry} className="update-button">
        업데이트
      </button>
    </form>
  );
}

export default CountryForm;
