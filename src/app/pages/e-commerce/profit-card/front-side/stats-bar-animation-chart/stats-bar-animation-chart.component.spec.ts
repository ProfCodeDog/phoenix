import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBarAnimationChartComponent } from './stats-bar-animation-chart.component';

describe('StatsBarAnimationChartComponent', () => {
  let component: StatsBarAnimationChartComponent;
  let fixture: ComponentFixture<StatsBarAnimationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsBarAnimationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBarAnimationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
