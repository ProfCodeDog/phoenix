import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
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
