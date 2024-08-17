import { createReducer, on } from '@ngrx/store';
import { SelectedCountryState } from '../../models/selectedCountry.model';
import {
  loadCountryHolidays,
  loadCountryHolidaysFailure,
  loadCountryHolidaysSuccess,
  selectCountry,
  selectCountryFailure,
  selectCountrySuccess,
} from './selectedCountry.actions';

export const initialState: SelectedCountryState = {
  selectedCountry: null,
  selectedCountryHolidays: [],
  loadingCountryInfo: false,
  loadingCountryHolidays: false,
  error: null,
};

export const selectedCountryReducer = createReducer(
  initialState,
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
  }))
);
