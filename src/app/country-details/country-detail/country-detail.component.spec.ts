import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailComponent } from './country-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])]
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
