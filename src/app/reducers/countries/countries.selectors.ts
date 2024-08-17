import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from '../../models/country.model';

export const selectCountryState =
  createFeatureSelector<CountriesState>('countries');
export const selectCountries = createSelector(
  selectCountryState,
  state => state.countries
);

export const selectCountriesLoading = createSelector(
  selectCountryState,
  state => state.loadingCountries
);

export const selectCountriesError = createSelector(
  selectCountryState,
  state => state.error
);

export const selectCountriesNextHolidays = createSelector(
  selectCountryState,
  state => state.randomCountriesHolidays
);
export const selectCountriesNextHolidaysLoading = createSelector(
  selectCountryState,
  state => state.loadingRandomCountriesHolidays
);
