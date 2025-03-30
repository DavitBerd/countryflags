import CountryCard from "../../components/countryCards";
import { countries } from "../../types/types";
import "./style.scss";

type HomeProps = {
  theme: "light" | "dark";
};

const Home = ({ theme }: HomeProps) => {
  return (
    <div className={`main-container ${theme}`}>
      <div className="search-container">
        <form action="">
          <input
            type="text"
            placeholder="Search Country"
            className="searchBar"
          />
          <select name="" id="">
            <option value="" hidden>
              Choose by Region
            </option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
        </form>
      </div>
      <div className="card-container">
        {countries.map((country, index) => (
          <CountryCard key={country.name} country={country} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
