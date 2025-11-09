import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const Countries = ({ API_ENDPOINT }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch(API_ENDPOINT);
            const data = await res.json();
            setCountries(data)
        }
        return fetchCountries;
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "15px" }}>
            {
                countries?.map((country) => {
                    return (
                        <div>
                            <CountryCard country={country} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Countries;