import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import {ECommerceComponent} from './e-commerce/e-commerce.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
      path: 'dashboard',
      component: ECommerceComponent,
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {
}
