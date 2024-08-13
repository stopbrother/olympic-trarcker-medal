import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);


  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  const handleAddCountry = (event) => {
    event.preventDefault();
    const newCountry = {
      name : country,
      gold : gold,
      silver : silver,
      bronze : bronze
    }
    setCountries([...countries, newCountry]);
    console.log(countries);
  };

  const handleUpdateCountry = (event) => {
    event.preventDefault();    
    const countryToupdate = countries.map((countrited) => {
      if(countrited.name === country) {
        const updateMedal = {
          ...countrited,
          gold : gold,
          silver, silver,
          bronze, bronze
        };
        return updateMedal;
      } else {
        alert ("리스트에 없는 나라입니다.");
        return countrited;
      }
    });    
    setCountries(countryToupdate);
  };

  const handleDeleteCountry = (id) => {
    
  };

  const handleInputCountry = (event) => {
    setCountry(event.target.value);
    console.log(country);
  }
  const handleInputGold = (event) => {
    setGold(event.target.value);
    console.log(gold);
  }
  const handleInputSilver = (event) => {
    setSilver(event.target.value);
    console.log(silver);
  }
  const handleInputBronze = (event) => {
    setBronze(event.target.value);
    console.log(bronze);
  }

  // const onClickAddSubmit = () => {

  // }

  return (
    <div className='container'>
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className='input-group'>
        <div className='country'>
          <label htmlFor="">국가명</label>
          <input onChange={handleInputCountry} value={country} type="text" placeholder='국가 입력' />          
        </div>
        <div className='gold-medal'>
          <label htmlFor="">금메달</label>
          <input onChange={handleInputGold} value={gold} type="text" />
        </div>
        <div className='silver-medal'>
          <label htmlFor="">은메달</label>
          <input onChange={handleInputSilver} value={silver} type="text" />
        </div>
        <div className='bronze-medal'>
          <label htmlFor="">동메달</label>
          <input onChange={handleInputBronze} value={bronze} type="text" />
        </div>
        <button onClick={handleAddCountry} className='add-button'>국가 추가</button>
        <button onClick={handleUpdateCountry} className='update-button'>메달 추가</button>
      </form>
      <div>
        <div className='medal-list-title'>
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
              <button className='delete-button'>삭제</button>
            </li>
        </ul>
        ))}
      </div>
    </div>    
  )
}

export default App
