import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = ({ API_ENDPOINT }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCountries();
  }, [API_ENDPOINT]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {countries?.map((country) => (
        <div key={country.name}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
