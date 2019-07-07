import { Component, OnInit } from '@angular/core';
import {ProfitBarAnimationChartData} from '../../../../../@core/data/profit-bar-animation-chart';
import {takeWhile} from 'rxjs/internal/operators';

@Component({
  selector: 'app-stats-card-front',
  templateUrl: './stats-card-front.component.html',
  styleUrls: ['./stats-card-front.component.scss']
})
export class StatsCardFrontComponent implements OnInit {

  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }

  ngOnInit() {
  }

}
