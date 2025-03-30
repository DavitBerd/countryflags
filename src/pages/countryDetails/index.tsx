// src/pages/countryDetails/index.tsx
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "../../types/types";
import "./style.scss";
import arrowWhite from "../../imgs/call-made.svg";
import arrowBlack from "../../imgs/call-made(1).svg";

type CountryDetailProps = {
  theme: "light" | "dark";
};

const CountryDetail = ({ theme }: CountryDetailProps) => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();

  const countryIndex = Number(index);
  const country = countries[countryIndex];

  if (!country) return <div>Country not found</div>;

  return (
    <div className={`country-detail-container ${theme}`}>
      <button onClick={() => navigate("/")} className="btn">
        <img
          src={theme === "light" ? arrowWhite : arrowBlack}
          alt="Back arrow"
          className="theme-icon"
        />
        Back
      </button>
      <div className="country-detail">
        <div className="flaginfo">
          <img src={country.flags} alt={`${country.name} flag`} />
        </div>
        <div className="country-info">
          <h1>{country.name}</h1>
          <div className="details-grid">
            <div className="details-column">
              <p>
                <span>Native Name:</span> {country.nativeName}
              </p>
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Subregion:</span> {country.subRegion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
            <div className="details-column">
              <p>
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </p>
              <p>
                <span>Currencies:</span> {country.currencies}
              </p>
              <p>
                <span>Languages:</span> {country.languages.join(", ")}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p> Border Countries:</p>
            <div className="border-list">
              {country.borderCountries.map((borderCountry, index) => (
                <p key={index} className="border-country">
                  {borderCountry}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
