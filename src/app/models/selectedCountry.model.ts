import { CountryInfo } from './country.model';
import { Holiday } from './holiday.model';

export interface SelectedCountryState {
  selectedCountry: CountryInfo | null;
  selectedCountryHolidays: Holiday[];
  loadingCountryInfo: boolean;
  loadingCountryHolidays: boolean;
  error: Error | null;
}
