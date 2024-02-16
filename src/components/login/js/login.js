import meiviLogo from '../../../assets/img/meivi-logo.png'

//Componente
export class meiviLogin extends HTMLElement{

    title;
    constructor(){
      super();
      console.log("Hola Construcctor");
    }
    
    getTemplate(){
      const template = document.createElement("template");
      template.innerHTML = `<div class="container py-5 py-sm-7">
  <div class="mx-auto" style="max-width: 30rem;">
    <!-- Card -->
    <div class="card card-lg mb-5">
      <div class="card-body">
        <!-- Form -->
        <form class="js-validate needs-validation" novalidate>
          <div class="text-center">
            <div class="mb-5">
              <h1 class="display-5">Inicia Sesión</h1>
            </div>
            <span class="divider-center text-muted mb-4">
              <img class="img-fluid w-25" id="imgLogo" src="${meiviLogo}" alt="Logo">
            </span>
          </div>
  
          <!-- Form -->
          <div class="mb-4">
            <label class="form-label" for="signinSrEmail">Tu email</label>
            <input type="email" class="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1"
              placeholder="email@address.com" aria-label="email@address.com" required>
            <span class="invalid-feedback">Ingresa una dirección de correo válida.</span>
          </div>
          <!-- End Form -->
  
          <!-- Form -->
          <div class="mb-4">
            <label class="form-label w-100" for="signupSrPassword" tabindex="0">
              <span class="d-flex justify-content-between align-items-center">
                <span>Clave</span>
                <a class="form-label-link mb-0" href="./authentication-reset-password-basic.html">Olvidaste tu Clave?</a>
              </span>
            </label>
  
            <div class="input-group input-group-merge" data-hs-validation-validate-class>
              <input type="password" class="js-toggle-password form-control form-control-lg" name="password"
                id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required"
                required minlength="8" data-hs-toggle-password-options='{
                       "target": "#changePassTarget",
                       "defaultClass": "bi-eye-slash",
                       "showClass": "bi-eye",
                       "classChangeTarget": "#changePassIcon"
                     }'>
              <a id="changePassTarget" class="input-group-append input-group-text" href="javascript:;">
                <i id="changePassIcon" class="bi-eye"></i>
              </a>
            </div>
  
            <span class="invalid-feedback">Ingresa una clave válida.</span>
          </div>
          <!-- End Form -->
  
          <!-- Form Check -->
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" value="" id="termsCheckbox">
            <label class="form-check-label" for="termsCheckbox">
              Recordarme
            </label>
          </div>
          <!-- End Form Check -->
  
          <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-lg"><i class="bi bi-file-person m-2"></i>Ingresar</button>
          </div>
  
          <div class="text-center">
            <div class="mt-5">
              <p>¿No tienes tu cuenta aún? <a class="link" href="./authentication-signup-basic.html">Registrate aquí</a></p>
            </div>
          </div>
  
        </form>
        <!-- End Form -->
      </div>
    </div>
    <!-- End Card -->
  
  </div>
  </div>`;
  
      return template;
    }
  
    render(){
      this.appendChild(this.getTemplate().content.cloneNode(true))
    }
  
    connectedCallback(){
        console.log("Hola DOM");
      this.render();
    }

    disconnectedCallback(){
        console.log("Adios DOM");
    }
}

(function () {
    window.onload = function () {
        HSBsValidation.init('.js-validate', {
        onSubmit: data => {
            data.event.preventDefault()
            userValidated();
        }
        });
        new HSTogglePassword('.js-toggle-password')
    };
})();

export function hello (){
    console.log("hello");
}



function userValidated(){
  let btnLogin =  document.querySelector('button[type="submit"]');
  
  btnLogin.setAttribute('disabled',true)
  let url = 'https://dog.ceo/api/breeds/image/random';

  fetch(url).then(response => response.json()).then(data=>{
    console.log(data);
    if(data.status === 'success'){
      alert('Redirect');
    }
    else{
      btnLogin.setAttribute('disabled',false);
    }
  });
}



