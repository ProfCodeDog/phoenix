import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/internal/operators';
import {StatsBarData} from '../../../../../@core/data/stats-bar';

@Component({
  selector: 'app-stats-card-back',
  templateUrl: './stats-card-back.component.html',
  styleUrls: ['./stats-card-back.component.scss']
})
export class StatsCardBackComponent implements OnInit, OnDestroy {


  private alive = true;

  chartData: number[];

  constructor(private statsBarData: StatsBarData) {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }


}
