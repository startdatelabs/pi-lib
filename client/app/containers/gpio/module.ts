import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GPIOPageComponent } from './page';
import { GPIOPinsComponent } from './pins';
import { PiModule } from '../../lib';

/**
 * Noop page module
 */

const DECLARATIONS = [
  GPIOPageComponent,
  GPIOPinsComponent
];

@NgModule({

  declarations: [
    ...DECLARATIONS
  ],

  exports: [
    ...DECLARATIONS
  ],

  imports: [
    CommonModule,
    PiModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class GPIOPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GPIOPageModule,
      providers: [ ]
    };
  }
}
