import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHolidayCardComponent } from './country-holiday-card.component';

describe('CountryHolidayCardComponent', () => {
  let component: CountryHolidayCardComponent;
  let fixture: ComponentFixture<CountryHolidayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryHolidayCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHolidayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
