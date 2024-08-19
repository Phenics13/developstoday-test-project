import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesService } from '../../services/countries.service';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import {
  loadCountryHolidays,
  loadCountryHolidaysFailure,
  loadCountryHolidaysSuccess,
  selectCountry,
  selectCountryFailure,
  selectCountrySuccess,
} from './selectedCountry.actions';

@Injectable()
export class SelectedCountryEffects {
  private actions$ = inject(Actions);
  private countriesService = inject(CountriesService);

  selectCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectCountry),
      switchMap(({ countryCode }) =>
        this.countriesService.getCountryInfo(countryCode).pipe(
          delay(300),
          map(countryInfo => selectCountrySuccess({ countryInfo })),
          catchError(error => of(selectCountryFailure({ error })))
        )
      )
    )
  );

  loadCountryHolidays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountryHolidays),
      switchMap(({ countryCode, year }) =>
        this.countriesService.getCountryHolidays(countryCode, year).pipe(
          map(holidays => loadCountryHolidaysSuccess({ holidays })),
          catchError(error => of(loadCountryHolidaysFailure({ error })))
        )
      )
    )
  );
}
