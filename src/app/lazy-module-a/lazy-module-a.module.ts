import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './a/a.component';
import { A_COMPONENT } from '../app.tokens';

const ARoutes: Routes = [
  {
    path: '',
    component: AComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ARoutes)
  ],
  providers: [
    {
      provide: A_COMPONENT,
      useFactory: () => AComponent,
      multi: true
    }
  ],
  declarations: [
    AComponent
  ],
  entryComponents: [
    AComponent
  ],
  bootstrap: [
    AComponent
  ]
})
export class LazyModuleA { }
