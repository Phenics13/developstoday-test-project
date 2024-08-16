import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesService } from '../../services/countries.service';
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
import { catchError, delay, map, of, switchMap } from 'rxjs';

@Injectable()
export class CountriesEffects {
  private actions$ = inject(Actions);
  private countriesService = inject(CountriesService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      switchMap(() =>
        this.countriesService.getCountries().pipe(
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) => of(loadCountriesFailure({ error })))
        )
      )
    )
  );

  selectCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectCountry),
      switchMap(({ countryCode }) =>
        this.countriesService.getCountryInfo(countryCode).pipe(
          delay(300),
          map((countryInfo) => selectCountrySuccess({ countryInfo })),
          catchError((error) => of(selectCountryFailure({ error })))
        )
      )
    )
  );

  loadCountryHolidays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountryHolidays),
      switchMap(({ countryCode, year }) =>
        this.countriesService.getCountryHolidays(countryCode, year).pipe(
          map((holidays) => loadCountryHolidaysSuccess({ holidays })),
          catchError((error) => of(loadCountryHolidaysFailure({ error })))
        )
      )
    )
  );

  loadNextCountriesHolidays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNextCountriesHolidays),
      switchMap(({ countries }) =>
        this.countriesService.getRandomCountriesHolidays(countries).pipe(
          map((countriesNextHolidays) =>
            loadNextCountriesHolidaysSuccess({
              countriesNextHoliday: countriesNextHolidays,
            })
          ),
          catchError((error) => of(loadNextCountriesHolidaysFailure({ error })))
        )
      )
    )
  );
}
