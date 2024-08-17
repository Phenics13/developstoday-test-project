import { createAction, props } from "@ngrx/store";
import { CountryInfo } from "../../models/country.model";
import { Holiday } from "../../models/holiday.model";

export const selectCountry = createAction(
  '[Countries] Select Country',
  props<{ countryCode: string }>()
);
export const selectCountrySuccess = createAction(
  '[Countries] Select Country Success',
  props<{ countryInfo: CountryInfo }>()
);
export const selectCountryFailure = createAction(
  '[Countries] Select Country Failure',
  props<{ error: Error }>()
);
export const loadCountryHolidays = createAction(
  '[Countries] Load Country Holidays',
  props<{ countryCode: string; year: number }>()
);
export const loadCountryHolidaysSuccess = createAction(
  '[Countries] Load Country Holidays Success',
  props<{ holidays: Holiday[] }>()
);
export const loadCountryHolidaysFailure = createAction(
  '[Countries] Load Country Holidays Failure',
  props<{ error: Error }>()
);