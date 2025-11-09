import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = ({ API_ENDPOINT }) => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(API_ENDPOINT);
                if (!res.ok) {
                    throw new Error(`API returned status ${res.status}`);
                }
                const data = await res.json();
                setCountries(data);
            } catch (err) {
                console.error("Error fetching countries:", err.message);
                setError(err.message);
            }
        };

        fetchCountries();
    }, [API_ENDPOINT]);

    if (error) {
        return (
            <div style={{ textAlign: "center", color: "red" }}>
                Failed to load countries: {error}
            </div>
        );
    }

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
                <div key={country.name?.common}>
                    <CountryCard country={country} />
                </div>
            ))}
        </div>
    );
};

export default Countries;
