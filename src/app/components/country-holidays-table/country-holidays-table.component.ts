import { Component, Input } from '@angular/core';
import { Holiday } from '../../models/holiday.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-country-holidays-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './country-holidays-table.component.html',
  styleUrl: './country-holidays-table.component.scss',
})
export class CountryHolidaysTableComponent {
  @Input() countryHolidays: Holiday[] = [];

  displayedColumns: string[] = ['name', 'date', 'types'];
}
