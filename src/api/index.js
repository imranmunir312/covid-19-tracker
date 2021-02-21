const url = "https://corona.lmao.ninja/v3/covid-19";

export const fetchGlobalApiData = async () => {
  const promise = await fetch(`${url}/all`);
  const data = await promise.json();
  return data;
};

export const fetchAllCountriesName = async () => {
  const promise = await fetch(`${url}/countries`);
  const data = await promise.json();
  const allCountriesNames = [
    "All Countries",
    ...data.map((val) => val.country),
  ];
  return allCountriesNames;
};

export const fetchSpecificCountryData = async (country) => {
  const promise = await fetch(`${url}/countries/${country}`);
  const data = await promise.json();
  return data;
};
