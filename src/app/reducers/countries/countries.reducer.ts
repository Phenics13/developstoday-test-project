import { createReducer, on } from '@ngrx/store';
import { CountriesState } from '../../models/country.model';
import {
  loadCountries,
  loadCountriesFailure,
  loadCountriesSuccess,
  loadCountryHolidays,
  loadCountryHolidaysFailure,
  loadCountryHolidaysSuccess,
  loadNextCountriesHolidays,
  loadNextCountriesHolidaysFailure,
  loadNextCountriesHolidaysSuccess,
  selectCountry,
  selectCountryFailure,
  selectCountrySuccess,
} from './countries.actions';

export const initialState: CountriesState = {
  countries: [],
  selectedCountry: null,
  selectedCountryHolidays: [],
  randomCountriesHolidays: [],
  loadingCountries: false,
  loadingCountryInfo: false,
  loadingCountryHolidays: false,
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
  on(selectCountry, state => ({
    ...state,
    loadingCountryInfo: true,
    error: null,
  })),
  on(selectCountrySuccess, (state, { countryInfo }) => ({
    ...state,
    selectedCountry: countryInfo,
    loadingCountryInfo: false,
  })),
  on(selectCountryFailure, (state, { error }) => ({
    ...state,
    loadingCountryInfo: false,
    error,
  })),
  on(loadCountryHolidays, state => ({
    ...state,
    loadingCountryHolidays: true,
    error: null,
  })),
  on(loadCountryHolidaysSuccess, (state, { holidays }) => ({
    ...state,
    selectedCountryHolidays: holidays,
    loadingCountryHolidays: false,
  })),
  on(loadCountryHolidaysFailure, (state, { error }) => ({
    ...state,
    loadingCountryHolidays: false,
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
