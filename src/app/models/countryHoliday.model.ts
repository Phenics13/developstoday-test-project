import { Country } from "./country.model";
import { Holiday } from "./holiday.model";

export interface CountryNextHoliday {
  country: Country;
  holiday: Holiday;
}