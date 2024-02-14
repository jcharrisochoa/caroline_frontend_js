import './style.css'
import traduccion from './src/lang/es.json';
import {meiviLogin,hello}  from './src/components/login/js/login';

const title = document.querySelector("[meivi-title]");
title.innerHTML =traduccion.title;

//Define custom tag html
customElements.define("meivi-login",meiviLogin);

const bntHola = document.getElementById("btn_hola");
bntHola.addEventListener("click",hello);