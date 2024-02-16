export class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    initRouter() {
        const { location: { pathname = '/' } } = window;
        const uri = pathname === '/' ? 'login' : pathname.replace('/','');
        console.log(location);
        console.log(uri);
        this.load(uri);
    }

    load(page = "login") {
        const { paths } = this;
        console.log(paths)
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");

    
        //$CONTAINER.innerHTML = template;
        window.history.pushState({}, "done", path);

        fetch(template)
            .then(response => response.text())
            .then(data => {
                console.log(data);
               if(template != '<h1>Login</h1>')
                    $CONTAINER.innerHTML = data;
            })
            .catch(error => console.error('Error fetching template:', error));


    }

    /*constructor(routes) {
        this.routes = routes;
    }

    init() {
        window.addEventListener('hashchange', this.hashChanged.bind(this));
        this.hashChanged();
    }

    hashChanged() {
        const hash = window.location.hash.substring(1);
        const route = this.routes[hash];
        const content = document.getElementById('content');
        if (route) {
            this.loadContent(route.template, content);
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
    }*/

}