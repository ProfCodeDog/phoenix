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


const COMPONENTS = [
  ProfitCardComponent
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
