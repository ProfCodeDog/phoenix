import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {NbSidebarModule, NbLayoutModule, NbButtonModule} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent
  ],
  exports: [],
  providers: []
})
export class PagesModule {
}
