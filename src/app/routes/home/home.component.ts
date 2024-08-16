import { Component } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryListComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
