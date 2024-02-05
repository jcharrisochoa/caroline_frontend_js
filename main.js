//import './style.css'
import meiviLogo from './src/assets/img/meivi-logo.png'
import traduccion from './src/lang/es.json';

document.querySelector("#imgLogo").src = meiviLogo;
document.querySelector("[meivi-title]").innerHTML =traduccion.usuario;

export default (function () {
  window.onload = function () {
    
    HSBsValidation.init('.js-validate', {
      onSubmit: data => {
        data.event.preventDefault()
        alert('Submited')
      }
    });

    new HSTogglePassword('.js-toggle-password')

  }
})()

