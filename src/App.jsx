import { useState } from "react";
import "./App.css";
import CountrySection from "./components/CountrySection";

function App() {
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <CountrySection />
    </div>
  );
}

export default App;
