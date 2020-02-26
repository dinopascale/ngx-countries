import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBorderComponent } from './country-border.component';
import { Borders } from '../../interfaces/countries.interface';

describe('CountryBorderComponent', () => {
  let component: CountryBorderComponent;
  let fixture: ComponentFixture<CountryBorderComponent>;
  let fakeBorders: Borders = {name: 'fakeName', flag: 'fakeFlag', alpha3Code: 'fakeCode'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBorderComponent);
    component = fixture.componentInstance;
    component.border = fakeBorders;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
