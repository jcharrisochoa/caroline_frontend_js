import logo from '../../assets/img/meivi-logo.png'

export class MeiviLogo extends HTMLElement{
    constructor(){
        super()
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `<img class="img-fluid w-25" id="imgLogo" src="${logo}" alt="Logo">`;

        return template;
    }
    
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        //console.log("Hola DOM");
        this.render();
    }

    disconnectedCallback(){
        //console.log("Adios DOM");
    }
}