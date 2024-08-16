import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHolidaysComponent } from './country-holidays.component';

describe('CountryHolidaysComponent', () => {
  let component: CountryHolidaysComponent;
  let fixture: ComponentFixture<CountryHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryHolidaysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
