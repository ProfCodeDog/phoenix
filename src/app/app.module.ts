import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbChatModule,
  NbOverlayModule,
  NbCdkMappingModule,
  NbA11yModule,
  NbCdkAdapterModule,
  NbDialogModule,
  NbToastrModule,
  NbWindowModule,
  NbDatepickerModule,
  NbThemeModule,
  NbSidebarModule,
  NbMenuModule,
} from '@nebular/theme';

import {NotFoundComponent} from './pages/miscellaneous/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbChatModule.forRoot(),
    NbOverlayModule.forRoot(),
    NbCdkMappingModule.forRoot(),
    NbA11yModule.forRoot(),
    NbCdkAdapterModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({name: 'dark'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
