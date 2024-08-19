import { CountryNextHoliday } from './countryHoliday.model';

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
  randomCountriesHolidays: CountryNextHoliday[];
  loadingCountries: boolean;
  loadingRandomCountriesHolidays: boolean;
  error: Error | null;
}
