import './style.css'
import traduccion from './src/lang/es.json';
import  {MeiviLogo}  from './src/components/shared/logo';
import {Router} from './src/routes/router-login.js'; //clase
import {routes} from './src/routes/routes-login.js'; //path

document.querySelector("[meivi-title]").innerHTML =traduccion.title;
customElements.define("meivi-logo",MeiviLogo);

const router = new Router(routes);
router.init();