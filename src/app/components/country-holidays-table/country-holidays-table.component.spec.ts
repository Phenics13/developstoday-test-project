import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHolidaysTableComponent } from './country-holidays-table.component';

describe('CountryHolidaysTableComponent', () => {
  let component: CountryHolidaysTableComponent;
  let fixture: ComponentFixture<CountryHolidaysTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryHolidaysTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryHolidaysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
