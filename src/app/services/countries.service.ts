import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { forkJoin, map, Observable } from 'rxjs';
import { Country, CountryInfo } from '../models/country.model';
import { Holiday } from '../models/holiday.model';
import { CountryNextHoliday } from '../models/countryHoliday.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);
  countriesUrl = environment.countriesURL;

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countriesUrl}/AvailableCountries`);
  }

  getCountryInfo(countryCode: string): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(
      `${this.countriesUrl}/CountryInfo/${countryCode}`
    );
  }

  getCountryHolidays(countryCode: string, year: number): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.countriesUrl}/PublicHolidays/${year}/${countryCode}`
    );
  }

  getNextCountryHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.countriesUrl}/NextPublicHolidays/${countryCode}`
    );
  }

  getRandomCountries(countries: Country[], amount = 3): Country[] {
    const randomCountries = new Set<string>();
    while (randomCountries.size < amount) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      randomCountries.add(countries[randomIndex].countryCode);
    }
    return Array.from(randomCountries).map(
      countryCode =>
        countries.find(country => country.countryCode === countryCode)!
    );
  }

  getRandomCountriesHolidays(
    countries: Country[]
  ): Observable<CountryNextHoliday[]> {
    return forkJoin(
      countries.map(country =>
        this.getNextCountryHolidays(country.countryCode).pipe(
          map(holidays => ({
            country: country,
            holiday: holidays[0],
          }))
        )
      )
    );
  }
}
