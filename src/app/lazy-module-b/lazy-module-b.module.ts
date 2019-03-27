import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BComponent } from './b/b.component';
import { RouterModule, Routes } from '@angular/router';

const BRoutes: Routes = [
  {
    path: '',
    component: BComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      BRoutes
    )
  ],
  declarations: [
    BComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LazyModuleB { }
