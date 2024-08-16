import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { CountryInfo } from '../../models/country.model';
import {
  selectCountryInfo,
  selectCountryInfoLoading,
} from '../../reducers/countries/countries.selectors';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { CountryHolidaysComponent } from '../../components/country-holidays/country-holidays.component';
import { ActivatedRoute } from '@angular/router';
import { selectCountry } from '../../reducers/countries/countries.actions';
import { YearSelectorComponent } from '../../components/year-selector/year-selector.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    CountryHolidaysComponent,
    YearSelectorComponent,
    CommonModule,
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent implements OnInit {
  private store = inject(Store<State>);
  private route = inject(ActivatedRoute);
  selectedCountry$: Observable<CountryInfo | null>;
  isLoadingCountryInfo$: Observable<boolean>;

  selectedYear: number = new Date().getFullYear();

  constructor() {
    this.selectedCountry$ = this.store.select(selectCountryInfo);
    this.isLoadingCountryInfo$ = this.store.select(selectCountryInfoLoading);
  }

  ngOnInit(): void {
    const countryCode = this.route.snapshot.paramMap.get('countryCode')!;
    this.store.dispatch(selectCountry({ countryCode }));
  }
}
