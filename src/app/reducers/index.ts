import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CountriesState } from '../models/country.model';
import { countriesReducer } from './countries/countries.reducer';
import { CountriesEffects } from './countries/countries.effects';
import { SelectedCountryState } from '../models/selectedCountry.model';
import { selectedCountryReducer } from './selectedCountry/selectedCountry.reducer';
import { SelectedCountryEffects } from './selectedCountry/selectedCountry.effects';

export interface State {
  countries: CountriesState;
  selectedCountry: SelectedCountryState;
}

export const reducers: ActionReducerMap<State> = {
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
};

export const effects = [CountriesEffects, SelectedCountryEffects];

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
