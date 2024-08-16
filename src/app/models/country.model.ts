import { CountryNextHoliday } from './countryHoliday.model';
import { Holiday } from './holiday.model';

export interface CountryInfo {
  countryCode: string;
  commonName: string;
  officialName: string;
  region: string;
  borders: CountryInfo[];
}

export interface Country {
  countryCode: string;
  name: string;
}

export interface CountriesState {
  countries: Country[];
  selectedCountry: CountryInfo | null;
  selectedCountryHolidays: Holiday[];
  randomCountriesHolidays: CountryNextHoliday[];
  loadingCountries: boolean;
  loadingCountryInfo: boolean;
  loadingCountryHolidays: boolean;
  loadingRandomCountriesHolidays: boolean;
  error: Error | null;
}
