import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { CountryComponent } from './routes/country/country.component';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:countryCode', component: CountryComponent },
  { path: '**', component: NotFoundPageComponent },
];
