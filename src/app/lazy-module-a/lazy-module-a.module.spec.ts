import { LazyModuleA } from './lazy-module-a.module';

describe('LazyModuleA', () => {
  let lazyModuleAModule: LazyModuleA;

  beforeEach(() => {
    lazyModuleAModule = new LazyModuleA();
  });

  it('should create an instance', () => {
    expect(lazyModuleAModule).toBeTruthy();
  });
});
