import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesTableHeaderComponent } from './countries-table-header.component';
import { HttpClientModule } from '@angular/common/http';

describe('CountriesTableHeaderComponent', () => {
  let component: CountriesTableHeaderComponent;
  let fixture: ComponentFixture<CountriesTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CountriesTableHeaderComponent ],
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
