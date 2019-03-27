import { Component, ComponentRef, Injector, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnDestroy {
  lazyComponent: ComponentRef<any>;

  constructor(
    public route: ActivatedRoute,
    public injector: Injector,
    public vcr: ViewContainerRef
  ) {
    this.lazyComponent = this.route.snapshot.data.dependency.componentFactory.create(
      this.route.snapshot.data.dependency.injector
    );

    // append the
    this.vcr.insert(this.lazyComponent.hostView);
  }

  ngOnDestroy() {
    this.lazyComponent.destroy();
  }
}
