import "./App.css";
import Cards from "./components/Cards";
import logo from "./resources/images/COVID-19.jpg";
import CountrySelector from "./components/CountrySelector";
import { fetchGlobalApiData, fetchSpecificCountryData } from "./api/index";
import { useEffect, useState } from "react";
import Graph from "./components/Graph";

function App() {
  const [globalData, setGlobalData] = useState({});
  const [complete, setComplete] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [graphData, setGraphData] = useState({});

  const handleChange = (country) => {
    setComplete(false);
    const fetchData = async () => {
      const data = await fetchSpecificCountryData(country);
      setGlobalData(data);
      setComplete(true);
      setGraphData({
        labels: ["Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: ["Recovered", "Deaths", "Active"],
            backgroundColor: ["green", "red", "blue"],
            data: [data.recovered, data.deaths, data.active],
          },
        ],
      });
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
      setGraphData({
        labels: ["Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: ["Recovered", "Deaths", "Active"],
            backgroundColor: ["green", "red", "blue"],
            data: [data.recovered, data.deaths, data.active],
          },
        ],
      });
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
      <Graph
        graphData={graphData}
        complete={complete}
        country={selectedCountry}
      />
    </div>
  );
}

export default App;
