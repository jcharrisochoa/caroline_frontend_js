import {RouterMenu} from '../../routes/router-menu.js'; //clase
import {routesMenu} from '../../routes/routes-menu.js'; //path

document.body.classList.add(
    'has-navbar-vertical-aside',
     'navbar-vertical-aside-show-xl',
     'footer-offset'
);
const routerMenu = new RouterMenu(routesMenu);
routerMenu.init();