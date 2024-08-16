import { Component, inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import {
  selectCountries,
  selectCountriesNextHolidays,
  selectCountriesNextHolidaysLoading,
} from '../../reducers/countries/countries.selectors';
import { filter, Observable, Subscription } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import { loadNextCountriesHolidays } from '../../reducers/countries/countries.actions';
import { CountryNextHoliday } from '../../models/countryHoliday.model';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { CountryHolidayCardComponent } from '../country-holiday-card/country-holiday-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LoadingSpinnerComponent, CountryHolidayCardComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnDestroy {
  private store = inject(Store<State>);
  private countriesService = inject(CountriesService);
  countries$: Observable<Country[]>;
  countriesSub: Subscription;
  countriesNextHolidays$: Observable<CountryNextHoliday[]>;
  isCountriesNextHolidaysLoading$: Observable<boolean>;

  randomCountriesNextHolidaysInterval: NodeJS.Timeout | undefined;

  constructor() {
    this.countries$ = this.store.select(selectCountries);
    this.countriesNextHolidays$ = this.store.select(
      selectCountriesNextHolidays
    );
    this.isCountriesNextHolidaysLoading$ = this.store.select(
      selectCountriesNextHolidaysLoading
    );

    this.countriesSub = this.countries$
      .pipe(filter((countries) => countries.length > 0))
      .subscribe((countries) => {
        this.loadRandomCountriesNextHolidays(countries);

        if (this.randomCountriesNextHolidaysInterval)
          clearInterval(this.randomCountriesNextHolidaysInterval);

        this.randomCountriesNextHolidaysInterval = setInterval(() => {
          this.loadRandomCountriesNextHolidays(countries);
        }, 10000);
      });
  }

  loadRandomCountriesNextHolidays(countries: Country[]) {
    const randomCountries = this.countriesService.getRandomCountries(
      countries,
      3
    );
    this.store.dispatch(
      loadNextCountriesHolidays({ countries: randomCountries })
    );
  }

  ngOnDestroy() {
    this.countriesSub.unsubscribe();
    clearInterval(this.randomCountriesNextHolidaysInterval);
  }
}
