import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { CountryInfo } from '../../models/country.model';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

import { Observable } from 'rxjs';
import { Holiday } from '../../models/holiday.model';

import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { CountryHolidaysTableComponent } from '../country-holidays-table/country-holidays-table.component';
import { selectCountryHolidays, selectCountryHolidaysLoading } from '../../reducers/selectedCountry/selectedCountry.selectors';
import { loadCountryHolidays } from '../../reducers/selectedCountry/selectedCountry.actions';

@Component({
  selector: 'app-country-holidays',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    CountryHolidaysTableComponent,
    CommonModule,
  ],
  templateUrl: './country-holidays.component.html',
  styleUrl: './country-holidays.component.scss',
})
export class CountryHolidaysComponent implements OnInit, OnChanges {
  @Input() countryInfo: CountryInfo | null = null;
  @Input() selectedYear: number = new Date().getFullYear();
  private store = inject(Store<State>);

  countryHolidays$: Observable<Holiday[] | null>;
  isLoadingCountryHolidays$: Observable<boolean>;

  constructor() {
    this.countryHolidays$ = this.store.select(selectCountryHolidays);
    this.isLoadingCountryHolidays$ = this.store.select(
      selectCountryHolidaysLoading
    );
  }

  ngOnInit() {
    if (!this.countryInfo) return;

    this.dispatchLoadHolidays(this.countryInfo.countryCode, this.selectedYear);
  }

  ngOnChanges() {
    if (!this.countryInfo) return;
    this.dispatchLoadHolidays(this.countryInfo.countryCode, this.selectedYear);
  }

  dispatchLoadHolidays(countryCode: string, year: number) {
    this.store.dispatch(loadCountryHolidays({ countryCode, year }));
  }
}
