import Module from './Module';

interface MenuConfig {
  menu: string;
  toggler: string;
  activeClass: string;
}

export default class MobileMenu implements Module {
  private config: MenuConfig;

  constructor(config: MenuConfig) {
    this.config = config;
  }

  onToggle() {
    document
      .querySelector(this.config.menu)
      ?.classList.toggle(this.config.activeClass);

    document
      .querySelector(this.config.toggler)
      ?.classList.toggle(this.config.activeClass);
  }

  init() {
    document
      .querySelector(this.config.toggler)
      ?.addEventListener('click', () => this.onToggle());
  }
}
