import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapStaticComponent } from './gmap-static.component';
import { GMapStatisService } from './gmap-static.service';
import { GMapStaticModule } from './gmap-static.module';

describe('GmapStaticComponent', () => {
  let component: GmapStaticComponent;
  let fixture: ComponentFixture<GmapStaticComponent>;
  let service: GMapStatisService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapStaticComponent ],
      providers: [GMapStatisService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

