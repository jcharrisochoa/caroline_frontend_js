import {ROUTER} from '../../../main';

(function () {
    console.log(ROUTER);
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

function userValidated(){
    let btnLogin =  document.querySelector('button[type="submit"]');
    
    btnLogin.setAttribute('disabled',true)
    let url = 'https://dog.ceo/api/breeds/image/random';
  
    fetch(url).then(response => response.json()).then(data=>{
        console.log(data);
        if(data.status === 'success'){
            //alert('Redirect');
            //window.location.href = '../layout/index.html';
            ROUTER.load('layout');
            //window.location.hash = 'layout';

        }
        else{
            btnLogin.setAttribute('disabled',false);
        }
    });
}