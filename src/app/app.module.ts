import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ThemeModule} from './@theme/theme.module';
import {CoreModule} from './@core/core.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NotFoundComponent} from './pages/miscellaneous/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
