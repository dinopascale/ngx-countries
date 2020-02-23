import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesTableHeaderComponent } from './countries-table-header.component';

describe('CountriesTableHeaderComponent', () => {
  let component: CountriesTableHeaderComponent;
  let fixture: ComponentFixture<CountriesTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
