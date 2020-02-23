import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBorderComponent } from './country-border.component';

describe('CountryBorderComponent', () => {
  let component: CountryBorderComponent;
  let fixture: ComponentFixture<CountryBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
