

const CountryCard = ({ country }) => {
    const { abbr, flag, name } = country
    return (
        <div style={{ display: "flex", alignItems: "center", textAlign: "center", flexDirection: "column", width: "150px", height: "170px", border: "1px solid #000", padding: "10px", borderRadius: "10px" }}>
            <img src={flag} alt={`the flag of ${name}`} style={{ width: "130px", height: "100px", margin: "0 auto" }} />
            <p>{name}</p>
        </div>
    )
}

export default CountryCard;