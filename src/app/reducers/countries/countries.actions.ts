import { createAction, props } from '@ngrx/store';
import { Country, CountryInfo } from '../../models/country.model';
import { Holiday } from '../../models/holiday.model';
import { CountryNextHoliday } from '../../models/countryHoliday.model';

export const loadCountries = createAction('[Countries] Load Countries');
export const loadCountriesSuccess = createAction(
  '[Countries] Load Countries Success',
  props<{ countries: Country[] }>()
);
export const loadCountriesFailure = createAction(
  '[Countries] Load Countries Failure',
  props<{ error: Error }>()
);
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
export const loadNextCountriesHolidays = createAction(
  '[Countries] Load Next Country Holidays',
  props<{ countries: Country[] }>()
);
export const loadNextCountriesHolidaysSuccess = createAction(
  '[Countries] Load Next Country Holidays Success',
  props<{ countriesNextHoliday: CountryNextHoliday[] }>()
);
export const loadNextCountriesHolidaysFailure = createAction(
  '[Countries] Load Next Country Holidays Failure',
  props<{ error: Error }>()
);
