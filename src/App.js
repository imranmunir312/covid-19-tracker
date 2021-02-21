import "./App.css";
import Cards from "./components/Cards";
import logo from "./resources/images/COVID-19.jpg";
import CountrySelector from "./components/CountrySelector";
import { fetchGlobalApiData, fetchSpecificCountryData } from "./api/index";
import { useEffect, useState } from "react";

function App() {
  const [globalData, setGlobalData] = useState({});
  const [complete, setComplete] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const handleChange = (country) => {
    setComplete(false);
    const fetchData = async () => {
      const data = await fetchSpecificCountryData(country);
      setGlobalData(data);
      setComplete(true);
    };
    fetchData();
    setSelectedCountry(country);
  };

  useEffect(() => {
    async function fetchData() {
      let data = null;
      if (selectedCountry === "All Countries") {
        data = await fetchGlobalApiData();
      } else {
        data = await fetchSpecificCountryData(selectedCountry);
      }
      setGlobalData(data);
      setComplete(true);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <img src={logo} height={200} alt="Covid 19 Tracker Logo" />
      <Cards cardData={globalData} complete={complete} />
      <CountrySelector
        selectedCountry={selectedCountry}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
