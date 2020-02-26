import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { Country } from '../interfaces/countries.interface';
import { of } from 'rxjs';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let FAKE_COUNTRY: Country = {
    flag: 'fakeFlag',
    name: 'fakeName',
    region: 'fakeRegion',
    capital: 'fakeCapital',
    population: 300,
    alpha3Code: 'FAK',
    topLevelDomain: ['.fk'],
    alpha2Code: 'FK',
    callingCodes: ['+22'],
    altSpellings: ['feiku'],
    subregion: 'fakeSubRegion',
    latlng: [10,20],
    demonym: 'fakeDemonym',
    area: 40000000,
    gini: 44,
    timezones: ['UTC-01', 'UTC-02'],
    borders: ['fa2', 'fa3'],
    nativeName: 'falso',
    numericCode: 'fake123',
    currencies: [{name: 'fakeDollar', symbol: 'F', code: 'fD'}],
    languages: [{iso639_1: 'fakeIso1',iso639_2: 'fakeIso2', name: 'fakinglish', nativeName: 'falsitaliano'}],
    translations: {de: 'faG', br: 'faBr', es: 'faEs', fr: 'faFr', it: 'faIt', ja: 'faJa', pt: 'faPt'},
    regionalBlocs: [{
      name: 'fakeRegionalBlock',
      acronym: 'frb',
      otherAcronyms: [],
      otherNames: []
    }],
    cioc: 'fakCioc'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      imports: [RouterModule.forRoot([]), HttpClientModule, SharedModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {data: of({country: FAKE_COUNTRY})}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
