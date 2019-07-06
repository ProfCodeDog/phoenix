import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ECommerceModule} from './e-commerce/e-commerce.module';
import {ECommerceComponent} from './e-commerce/e-commerce.component';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ECommerceModule,
    PagesRoutingModule,
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
