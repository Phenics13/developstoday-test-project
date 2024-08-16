import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CountriesState } from '../models/country.model';
import { countriesReducer } from './countries/countries.reducer';
import { CountriesEffects } from './countries/countries.effects';

export interface State {
  countries: CountriesState;
}

export const reducers: ActionReducerMap<State> = {
  countries: countriesReducer,
};

export const effects = [CountriesEffects];

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
