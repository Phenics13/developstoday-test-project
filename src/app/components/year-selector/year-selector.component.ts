import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-year-selector',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './year-selector.component.html',
  styleUrl: './year-selector.component.scss',
})
export class YearSelectorComponent {
  @Input() year = new Date().getFullYear();
  @Output() yearChange = new EventEmitter<number>();

  @Input() minYear = 2000;
  @Input() maxYear = new Date().getFullYear() + 6;

  onPreviousYear() {
    if (this.year > this.minYear) {
      this.yearChange.emit(this.year - 1);
    }
  }

  onNextYear() {
    if (this.year < this.maxYear) {
      this.yearChange.emit(this.year + 1);
    }
  }
}
