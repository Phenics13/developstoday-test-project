import { Component, Input } from '@angular/core';
import { CountryNextHoliday } from '../../models/countryHoliday.model';
import { MatCardModule } from '@angular/material/card';
import { fadeInFromTop } from './country-holiday-card.animations';

@Component({
  selector: 'app-country-holiday-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './country-holiday-card.component.html',
  styleUrl: './country-holiday-card.component.scss',
  animations: [fadeInFromTop],
})
export class CountryHolidayCardComponent {
  @Input() countryNextHoliday: CountryNextHoliday | null = null;
}
