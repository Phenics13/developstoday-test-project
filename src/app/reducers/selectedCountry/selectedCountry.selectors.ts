import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectedCountryState } from '../../models/selectedCountry.model';

export const selectSelectedCountryState =
  createFeatureSelector<SelectedCountryState>('selectedCountry');
export const selectCountryInfo = createSelector(
  selectSelectedCountryState,
  state => state.selectedCountry
);
export const selectCountryInfoLoading = createSelector(
  selectSelectedCountryState,
  state => state.loadingCountryInfo
);
export const selectCountryHolidays = createSelector(
  selectSelectedCountryState,
  state => state.selectedCountryHolidays
);
export const selectCountryHolidaysLoading = createSelector(
  selectSelectedCountryState,
  state => state.loadingCountryHolidays
);
