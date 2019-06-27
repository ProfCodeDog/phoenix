import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';

import {
  NbUserModule
} from '@nebular/theme';

import {NbSecurityModule} from '@nebular/security';

@NgModule({
  imports: [
    CommonModule,
    NbUserModule,
    NbSecurityModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [],
  providers: []
})
export class AuthModule {
}
