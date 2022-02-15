import Module from './modules/Module';

export default class App {
  private modules: Module[];

  constructor(modules: Module[]) {
    this.modules = modules;
  }

  public build() {
    this.modules.forEach((module) => module.init());
  }
}
    