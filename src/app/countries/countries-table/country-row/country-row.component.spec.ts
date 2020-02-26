import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRowComponent } from './country-row.component';
import { SharedModule } from '../../../shared/shared.module';
import { Country } from '../../../interfaces/countries.interface';

describe('CountryRowComponent', () => {
  let component: CountryRowComponent;
  let fixture: ComponentFixture<CountryRowComponent>;
  let FAKE_COUNTRY: Partial<Country> = {
    flag: 'fakeFlag',
    name: 'fakeName',
    region: 'fakeRegion',
    capital: 'fakeCapital',
    population: 300,
    alpha3Code: 'FAK'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRowComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRowComponent);
    component = fixture.componentInstance;
    component.country = FAKE_COUNTRY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
