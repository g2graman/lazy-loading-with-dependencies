import { LazyModuleB } from './lazy-module-b.module';

describe('LazyModuleB', () => {
  let lazyModuleBModule: LazyModuleB;

  beforeEach(() => {
    lazyModuleBModule = new LazyModuleB();
  });

  it('should create an instance', () => {
    expect(lazyModuleBModule).toBeTruthy();
  });
});
