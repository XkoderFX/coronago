import App from './scripts/app';
import MobileMenu from './scripts/modules/MobileMenu';
import './style.scss';

const mobileMenu = new MobileMenu({
  toggler: '#mobile-menu',
  menu: '.menu__body',
  activeClass: 'active',
});

const app = new App([mobileMenu]);
app.build();
