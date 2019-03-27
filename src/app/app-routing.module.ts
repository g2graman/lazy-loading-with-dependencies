import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DependencyResolver } from './shared/dependency.resolver';
import { A_COMPONENT } from './app.tokens';

const appRoutes: Routes = [
  {
    path: 'a',
    loadChildren: './lazy-module-a/lazy-module-a.module#LazyModuleA',
  },
  {
    path: 'b',
    loadChildren: './lazy-module-b/lazy-module-b.module#LazyModuleB',
    resolve: {
      dependency: DependencyResolver
    },
    data: {
      dependency: {
        module: './lazy-module-a/lazy-module-a.module#LazyModuleA',
        component: A_COMPONENT
      }
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    DependencyResolver
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
