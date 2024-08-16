import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.model';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { fadeInOnScroll } from './country-card.animations';
@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
  animations: [fadeInOnScroll],
})
export class CountryCardComponent {
  @Input() country: Country | null = null;
}
