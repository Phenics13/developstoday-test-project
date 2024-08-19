import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country.model';
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

// nextCountryHolidays
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
