import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BreakablePipe } from './pipes/breakable';
import { CircledNumberComponent } from './components/circled-number';
import { CodeMirrorGuard } from './guards/codemirror';
import { CodeViewerComponent } from './components/code-viewer';
import { CommonModule } from '@angular/common';
import { ConfiguratorService } from './services/configurator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DateFormatPipe } from './pipes/moment';
import { DaysOfWeekComboDirective } from './directives/days-of-week';
import { DaysOfWeekMultiDirective } from './directives/days-of-week';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { DurationPipe } from './pipes/moment';
import { EffectsModule } from '@ngrx/effects';
import { EllipsizePipe } from './pipes/ellipsize';
import { EnvService } from './services/env';
import { ExportableDataComponent } from './components/exportable-data';
import { ExportToCSVComponent } from './components/export-to-csv';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeCSSGuard } from './guards/fontawesome-css';
import { FontAwesomeJSGuard } from './guards/fontawesome-js';
import { FourOhFourPageComponent } from './pages/404-page';
import { FromUnixTimePipe } from './pipes/moment';
import { GoogleMapComponent } from './components/google-map';
import { GoogleMapInfoWindowComponent } from './components/google-map-infowindow';
import { GoogleMapsGuard } from './guards/google-maps';
import { GravatarComponent } from './components/gravatar';
import { HighlightJSGuard } from './guards/highlight-js';
import { HTMLifyPipe } from './pipes/htmlify';
import { JSONifyPipe } from './pipes/jsonify';
import { LaunchURLEffects } from './effects/launch-url';
import { LinkifyPipe } from './pipes/linkify';
import { LogEffects } from './effects/log';
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { ModuleWithProviders } from '@angular/core';
import { MultiSelectorComponent } from './components/multi-selector';
import { MultiSelectorControlDirective } from './components/multi-selector';
import { NavigatorComponent } from './components/navigator';
import { NavigatorEffects } from './effects/navigator';
import { NavigatorGroupComponent } from './components/navigator';
import { NavigatorItemComponent } from './components/navigator';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { NoDataOnPageComponent } from './components/no-data-on-page';
import { NodeFinderComponent } from './components/node-finder';
import { NumeralPipe } from './pipes/numeral';
import { PageableDataComponent } from './components/pageable-data';
import { PagedDataSourceService } from './services/paged-datasource';
import { PagedDataTableComponent } from './components/paged-datatable';
import { PageEffects } from './effects/page';
import { PeriodDirective } from './directives/periods';
import { PeriodsDirective } from './directives/periods';
import { PolymerAppComponent } from './components/polymer-app';
import { PolymerControlDirective } from './components/polymer-form';
import { PolymerFormComponent } from './components/polymer-form';
import { RouterEffects } from './effects/router';
import { RouterModule } from '@angular/router';
import { SingleSelectorComponent } from './components/single-selector';
import { SortableColumnComponent } from './components/sortable-column';
import { StatusbarComponent } from './components/statusbar';
import { TimeAgoPipe } from './pipes/moment';
import { TinyButtonComponent } from './components/tiny-button';
import { ToolbarControlsComponent } from './components/toolbar-controls';
import { UserEffects } from './effects/user';
import { UTCFormatPipe } from './pipes/moment';
import { WindowEffects } from './effects/window';
import { WorkingButtonComponent } from './components/working-button';

import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/maps-icons.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-label/iron-label.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-header-panel/paper-header-panel.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-tooltip/paper-tooltip.js';

/**
 * angular-lib module definition
 */


const COMPONENTS = [
  AnimatedRouterOutletComponent,
  CircledNumberComponent,
  CodeViewerComponent,
  DaysOfWeekComboDirective,
  DaysOfWeekMultiDirective,
  DrawerContainerComponent,
  DrawerPanelComponent,
  ExportToCSVComponent,
  ExportableDataComponent,
  FourOhFourPageComponent,
  GoogleMapComponent,
  GoogleMapInfoWindowComponent,
  GravatarComponent,
  MarkdownComponent,
  MultiSelectorComponent,
  MultiSelectorControlDirective,
  NavigatorComponent,
  NavigatorGroupComponent,
  NavigatorItemComponent,
  NoDataOnPageComponent,
  NodeFinderComponent,
  PageableDataComponent,
  PagedDataTableComponent,
  PeriodDirective,
  PeriodsDirective,
  PolymerAppComponent,
  PolymerControlDirective,
  PolymerFormComponent,
  SingleSelectorComponent,
  SortableColumnComponent,
  StatusbarComponent,
  TinyButtonComponent,
  ToolbarControlsComponent,
  WorkingButtonComponent
];

const PIPES = [
  BreakablePipe,
  DateFormatPipe,
  DurationPipe,
  FromUnixTimePipe,
  EllipsizePipe,
  HTMLifyPipe,
  JSONifyPipe,
  LinkifyPipe,
  MarkdownPipe,
  NumeralPipe,
  TimeAgoPipe,
  UTCFormatPipe
];

const SERVICES = [
  CodeMirrorGuard,
  ConfiguratorService,
  EnvService,
  FontAwesomeCSSGuard,
  FontAwesomeJSGuard,
  GoogleMapsGuard,
  HighlightJSGuard,
  PagedDataSourceService
];

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],

  exports: [
    ...COMPONENTS,
    ...PIPES,
    CommonModule,
    FlexLayoutModule,
    Ng2GoogleChartsModule,
    RouterModule
  ],

  imports: [
    CommonModule,
    EffectsModule.forFeature([
      LaunchURLEffects,
      LogEffects,
      NavigatorEffects,
      PageEffects,
      RouterEffects,
      UserEffects,
      WindowEffects
    ]),
    FlexLayoutModule,
    Ng2GoogleChartsModule,
    RouterModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
