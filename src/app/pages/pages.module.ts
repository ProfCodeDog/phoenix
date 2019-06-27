import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbBaseCalendarModule,
  NbCalendarKitModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbTabsetModule,
  NbActionsModule,
  NbSearchModule,
  NbCheckboxModule,
  NbBadgeModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbAlertModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbAccordionModule,
  NbListModule,
  NbInputModule,
  NbBidiModule,
  NbPlatformModule,
  NbTableModule,
  NbTooltipModule,
  NbSelectModule,
  NbRadioModule,
  NbTreeGridModule,
  NbIconModule
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbBaseCalendarModule,
    NbCalendarKitModule,
    NbLayoutModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbActionsModule,
    NbSearchModule,
    NbCheckboxModule,
    NbBadgeModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbProgressBarModule,
    NbAlertModule,
    NbSpinnerModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbInputModule,
    NbBidiModule,
    NbPlatformModule,
    NbTableModule,
    NbTooltipModule,
    NbSidebarModule,
    NbSelectModule,
    NbRadioModule,
    NbTreeGridModule,
    NbIconModule,
    NbEvaIconsModule,
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
