import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRowComponent } from './country-row.component';

describe('CountryRowComponent', () => {
  let component: CountryRowComponent;
  let fixture: ComponentFixture<CountryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
