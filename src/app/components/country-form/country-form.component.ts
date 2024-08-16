import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.scss',
})
export class CountryFormComponent implements OnDestroy {
  nameControl = new FormControl('');
  @Output() nameChange = new EventEmitter<string>();

  nameControlSub: Subscription;

  constructor() {
    this.nameControlSub = this.nameControl.valueChanges.subscribe(value =>
      this.nameChange.emit(value ?? '')
    );
  }

  ngOnDestroy() {
    this.nameControlSub.unsubscribe();
  }
}
