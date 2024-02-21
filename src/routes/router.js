export class Router {

    constructor(routes) {
        this.routes = routes;
    }

    init() {
        window.addEventListener('hashchange', this.hashChanged.bind(this));
        this.hashChanged();
        //this.loadDefaultRoute();
    }

    hashChanged() {
        const hash = window.location.hash.substring(1);
        const route = hash ? this.routes[hash] : this.routes['/'];
        //const content = (hash != 'layout') ? document.getElementById('contenido'):document.getElementById('contentLayout');
        console.log(document.getElementById('contentLayout'))
        const content = document.getElementById('contenido');
        if (route) {
            this.loadContent(route.template, content);
            this.loadScript(route.script);
            route.callback();
        } else {
            content.innerHTML = 'Page not found';
        }
    }

    loadContent(templateUrl, targetElement) {
        fetch(templateUrl)
            .then(response => response.text())
            .then(data => {
                targetElement.innerHTML = data;
            })
            .catch(error => console.error('Error fetching template:', error));
    }

    loadScript(scriptUrl) { 
        if (this.currentScript) {
            this.currentScript.remove();
        }

        const script = document.createElement('script');
        script.src = scriptUrl;
        document.body.appendChild(script);
        this.currentScript = script;
    }

    loadDefaultRoute() {
        //--window.location.hash = '/';
    }

}