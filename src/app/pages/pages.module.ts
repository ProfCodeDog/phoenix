import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ECommerceComponent} from './e-commerce/e-commerce.component';
import {ThemeModule} from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ECommerceComponent
  ],
  exports: [],
  providers: []
})
export class PagesModule {
}
