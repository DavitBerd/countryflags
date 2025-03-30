import { useNavigate } from "react-router-dom";
import { Country } from "../../types/types";
import "./style.scss";
type CountryCardProps = {
  country: Country;
  index: number;
};

const CountryCard = ({ country, index }: CountryCardProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/country/${index}`)} className="country-card">
      <div className="flag">
        <img src={country.flags} alt="" />
      </div>
      <div className="country-info">
        <h3>{country.name}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};
export default CountryCard;
