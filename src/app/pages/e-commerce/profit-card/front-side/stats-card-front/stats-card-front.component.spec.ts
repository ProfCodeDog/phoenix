import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCardFrontComponent } from './stats-card-front.component';

describe('StatsCardFrontComponent', () => {
  let component: StatsCardFrontComponent;
  let fixture: ComponentFixture<StatsCardFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCardFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
