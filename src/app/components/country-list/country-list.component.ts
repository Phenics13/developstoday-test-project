import { Component, inject, OnInit } from '@angular/core';
import { CountryFormComponent } from '../country-form/country-form.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadCountries } from '../../reducers/countries/countries.actions';
import {
  selectCountries,
  selectCountriesLoading,
} from '../../reducers/countries/countries.selectors';
import {
  combineLatest,
  concat,
  connect,
  debounceTime,
  map,
  Observable,
  startWith,
  Subject,
  take,
} from 'rxjs';
import { Country } from '../../models/country.model';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    CountryFormComponent,
    CountryCardComponent,
    LoadingSpinnerComponent,
    CommonModule,
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  private store = inject(Store<State>);
  private nameChangeSubject = new Subject<string>();
  countries$: Observable<Country[]>;
  filteredCountries$: Observable<Country[]>;
  isCountriesLoading$: Observable<boolean>;

  constructor() {
    this.countries$ = this.store.select(selectCountries);
    this.isCountriesLoading$ = this.store.select(selectCountriesLoading);

    this.filteredCountries$ = combineLatest([
      this.countries$,
      this.nameChangeSubject.pipe(
        startWith(''),
        connect(value =>
          concat(value.pipe(take(1)), value.pipe(debounceTime(300)))
        )
      ),
    ]).pipe(
      map(([countries, name]) => {
        if (!name) return countries;

        return countries.filter(country =>
          country.name.toLowerCase().includes(name.toLowerCase())
        );
      })
    );
  }

  onCountryNameChange(value: string) {
    this.nameChangeSubject.next(value);
  }

  ngOnInit() {
    this.store.dispatch(loadCountries());
  }
}
