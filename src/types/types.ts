import germanyFlag from "../imgs/1280px-Flag_of_Germany.png";
import usaFlag from "../imgs/1280px-Flag_of_Germany(1).png";
import brazilFlag from "../imgs/1280px-Flag_of_Germany(2).png";
import icelandFlag from "../imgs/1280px-Flag_of_Germany(3).png";
import afghanistanFlag from "../imgs/1280px-Flag_of_Germany(4).png";
import alandFlag from "../imgs/1280px-Flag_of_Germany(5).png";
import albaniaFlag from "../imgs/1280px-Flag_of_Germany(6).png";
import belgiumFlag from "../imgs/1280px-Flag_of_Germany(7).png";
export type Country = {
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: Array<string>;
  borderCountries: Array<string>;
  flags: string;
};

export const countries: Country[] = [
  {
    name: "Germany",
    nativeName: "Deutschland",
    population: "81,770,900",
    region: "Europe",
    subRegion: "Western Europe",
    capital: "Berlin",
    topLevelDomain: ".de",
    currencies: "Euro",
    languages: ["German"],
    borderCountries: ["France", "Poland", "Czech Republic"],
    flags: germanyFlag,
  },
  {
    name: "United States of America",
    nativeName: "United States of America",
    population: "331,449,000",
    region: "Americas",
    subRegion: "Northern America",
    capital: "washington, D.C.",
    topLevelDomain: ".us",
    currencies: "United States Dollar",
    languages: ["English"],
    borderCountries: ["Canada", "Mexico"],
    flags: usaFlag,
  },
  {
    name: "Brazil",
    nativeName: "Brasil",
    population: "213,993,437",
    region: "Americas",
    subRegion: "South America",
    capital: "Brasília",
    topLevelDomain: ".br",
    currencies: "Brazilian Real",
    languages: ["Portuguese"],
    borderCountries: [
      "Argentina",
      "Paraguay",
      "Bolivia",
      "Peru",
      "Colombia",
      "Venezuela",
      "Guyana",
      "Suriname",
    ],
    flags: brazilFlag,
  },
  {
    name: "Iceland",
    nativeName: "Ísland",
    population: "356,991",
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "Reykjavík",
    topLevelDomain: ".is",
    currencies: "Icelandic Króna",
    languages: ["Icelandic"],
    borderCountries: ["Greenland"],
    flags: icelandFlag,
  },
  {
    name: "Afghanistan",
    nativeName: "افغانستان",
    population: "38,928,346",
    region: "Asia",
    subRegion: "Southern Asia",
    capital: "Kabul",
    topLevelDomain: ".af",
    currencies: "Afghan Afghani",
    languages: ["Pashto", "Dari"],
    borderCountries: [
      "Pakistan",
      "Iran",
      "Turkmenistan",
      "Uzbekistan",
      "Tajikistan",
      "China",
    ],
    flags: afghanistanFlag,
  },
  {
    name: "Aland Islands",
    nativeName: "Åland",
    population: "29,000",
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "Mariehamn",
    topLevelDomain: ".ax",
    currencies: "Euro",
    languages: ["Swedish"],
    borderCountries: ["Finland"],
    flags: alandFlag,
  },
  {
    name: "Albania",
    nativeName: "Shqipëri",
    population: "2,845,955",
    region: "Europe",
    subRegion: "Southern Europe",
    capital: "Tirana",
    topLevelDomain: ".al",
    currencies: "Albanian Lek",
    languages: ["Albanian"],
    borderCountries: ["Montenegro", "Kosovo", "North Macedonia", "Greece"],
    flags: albaniaFlag,
  },
  {
    name: "Belgium",
    nativeName: "België",
    population: "11,589,623",
    region: "Europe",
    subRegion: "Western Europe",
    capital: "Brussels",
    topLevelDomain: ".be",
    currencies: "Euro",
    languages: ["Dutch", "French", "German"],
    borderCountries: ["France", "Germany", "Luxembourg", "Netherlands"],
    flags: belgiumFlag,
  },
];
