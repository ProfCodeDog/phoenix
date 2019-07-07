import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';

import {NgxEchartsModule} from 'ngx-echarts';
import {ChartModule} from 'angular2-chartjs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ThemeModule} from '../../@theme/theme.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';


import {CountryOrdersMapService} from './country-orders/map/country-orders-map.service';
import {ProfitCardComponent} from './profit-card/profit-card.component';
import {StatsCardFrontComponent} from './profit-card/front-side/stats-card-front/stats-card-front.component';
import {StatsBarAnimationChartComponent} from './profit-card/front-side/stats-bar-animation-chart/stats-bar-animation-chart.component';
import {StatsAreaChartComponent} from './profit-card/back-side/stats-area-chart/stats-area-chart.component';
import {StatsCardBackComponent} from './profit-card/back-side/stats-card-back/stats-card-back.component';


const COMPONENTS = [
  ProfitCardComponent,
  StatsCardFrontComponent,
  StatsBarAnimationChartComponent,
  StatsCardBackComponent,
  StatsAreaChartComponent,
];

const NB_MODULES = [
  NbCardModule,
  NbUserModule,
  NbButtonModule,
  NbIconModule,
  NbTabsetModule,
  NbSelectModule,
  NbListModule,
  NbProgressBarModule,
  NgxEchartsModule,
  NgxChartsModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
    ThemeModule,
    ChartModule,
    LeafletModule
  ], exports: [
    ...COMPONENTS
  ],
  providers: [
    CountryOrdersMapService,
  ]
})
export class ECommerceModule {
}
