import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCardBackComponent } from './stats-card-back.component';

describe('StatsCardBackComponent', () => {
  let component: StatsCardBackComponent;
  let fixture: ComponentFixture<StatsCardBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCardBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
