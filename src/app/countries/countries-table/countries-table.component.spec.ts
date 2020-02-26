import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesTableComponent } from './countries-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { Country } from '../../interfaces/countries.interface';

describe('CountriesTableComponent', () => {
  let component: CountriesTableComponent;
  let fixture: ComponentFixture<CountriesTableComponent>;
  const FAKE_COUNTRIES: Partial<Country>[] = [
    {
      flag: 'fakeFlag',
      name: 'fakeName',
      region: 'fakeRegion',
      capital: 'fakeCapital',
      population: 300,
      alpha3Code: 'FAK'
    },
    {
      flag: 'fakeFlag2',
      name: 'fakeName2',
      region: 'fakeRegion2',
      capital: 'fakeCapital2',
      population: 303,
      alpha3Code: 'FA2'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesTableComponent ],
      imports: [HttpClientModule, SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesTableComponent);
    component = fixture.componentInstance;
    component.countries = FAKE_COUNTRIES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
