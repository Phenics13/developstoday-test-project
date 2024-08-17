import { createReducer, on } from '@ngrx/store';
import { CountriesState } from '../../models/country.model';
import {
  loadCountries,
  loadCountriesFailure,
  loadCountriesSuccess,
  loadNextCountriesHolidays,
  loadNextCountriesHolidaysFailure,
  loadNextCountriesHolidaysSuccess,
} from './countries.actions';

export const initialState: CountriesState = {
  countries: [],
  randomCountriesHolidays: [],
  loadingCountries: false,
  loadingRandomCountriesHolidays: false,
  error: null,
};

export const countriesReducer = createReducer(
  initialState,
  on(loadCountries, state => ({
    ...state,
    loadingCountries: true,
    error: null,
  })),
  on(loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loadingCountries: false,
  })),
  on(loadCountriesFailure, (state, { error }) => ({
    ...state,
    loadingCountries: false,
    error,
  })),
  on(loadNextCountriesHolidays, state => ({
    ...state,
    loadingRandomCountriesHolidays: true,
    error: null,
  })),
  on(loadNextCountriesHolidaysSuccess, (state, { countriesNextHoliday }) => ({
    ...state,
    randomCountriesHolidays: countriesNextHoliday,
    loadingRandomCountriesHolidays: false,
  })),
  on(loadNextCountriesHolidaysFailure, (state, { error }) => ({
    ...state,
    loadingRandomCountriesHolidays: false,
    error,
  }))
);
