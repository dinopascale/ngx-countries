import { Country } from 'src/interfaces/countries.interface';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailComponent } from './country-detail.component';

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent<keyof Country>;
  let fixture: ComponentFixture<CountryDetailComponent<keyof Country>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
