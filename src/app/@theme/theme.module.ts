import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbSecurityModule} from '@nebular/security';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
import {CORPORATE_THEME} from './styles/theme.corporate';
import {DARK_THEME} from './styles/theme.dark';

import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  EvaIconsPipe,
} from './pipes';


import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  NbA11yModule,
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbBadgeModule,
  NbBaseCalendarModule,
  NbBidiModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbCdkAdapterModule,
  NbCdkMappingModule,
  NbChatModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbOverlayModule,
  NbPlatformModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTableModule,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
  NbWindowModule
} from '@nebular/theme';

import {NbEvaIconsModule} from '@nebular/eva-icons';

import {HeaderComponent} from './components/header/header.component';
import {OneColumnComponent} from './components/layouts/one-column/one-column.component';
import {WindowModeBlockScrollService} from './services/window-mode-block-scroll.service';
import {FooterComponent} from './components/footer/footer.component';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];


const NB_MODULES = [
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbBadgeModule,
  NbBaseCalendarModule,
  NbBidiModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbEvaIconsModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPlatformModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSecurityModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTableModule,
  NbTabsetModule,
  NbToastrModule,
  NbTooltipModule,
  NbUserModule,
  NbWindowModule,
  NgbModule,
  NbTreeGridModule
];

const COMPONENTS = [
  HeaderComponent,
  OneColumnComponent,
  FooterComponent
];

const ENTRY_COMPONENTS = [];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  EvaIconsPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'dark',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
  ).providers,
  ...NbA11yModule.forRoot().providers,
  ...NbCdkAdapterModule.forRoot().providers,
  ...NbCdkMappingModule.forRoot().providers,
  ...NbDatepickerModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ...NbOverlayModule.forRoot().providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbToastrModule.forRoot().providers,
  ...NbWindowModule.forRoot().providers,
  ...NbChatModule.forRoot({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
  }).providers,
];


@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [
    ...BASE_MODULES,
    ...NB_MODULES,
    ...COMPONENTS,
    ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS,
        WindowModeBlockScrollService],
    } as ModuleWithProviders;
  }
}
