import { Component, Injectable, InjectionToken, Injector, NgModuleFactory, NgModuleFactoryLoader, Type } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class DependencyResolver implements Resolve<Promise<any>> {
  constructor(
    public ngModuleFactoryLoader: NgModuleFactoryLoader,
    public injector: Injector
  ) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const moduleInjector = this.injector;

    if (route.data && route.data.dependency) {
      const moduleDependencyPath = route.data.dependency.module as string;
      const componentToken = route.data.dependency.component as InjectionToken<Component>;

      return this.ngModuleFactoryLoader.load(
        moduleDependencyPath
      ).then((ngModuleFactory: NgModuleFactory<any>) => {
        const moduleRef = ngModuleFactory.create(moduleInjector);
        const [componentType] = moduleRef.injector.get<Component>(componentToken) as Type<Component>[];
        const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentType);
        return {
          injector: moduleRef.injector,
          componentFactory,
        };
      }).catch(() => null);
    }

    return Promise.resolve(null);
  }
}
