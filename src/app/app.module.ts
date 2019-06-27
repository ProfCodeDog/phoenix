import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NotFoundComponent} from './pages/miscellaneous/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({name: 'dark'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
