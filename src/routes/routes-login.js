export const routes = {
    '/': {
        path: '/',
        script: './src/module/login/login.js',
        template: './src/module/login/login.html',
        callback: function() {
            console.log('Login route loaded');
        }
    },
    layout:{
        path: '/layout',
        script: './src/module/layout/layout.js',
        template: './src/module/layout/layout.html',
        callback: function() {
            console.log('Layout route loaded');
        }
    },
    error:{
        path: '/error',
        script: './src/module/error/error.js',
        template: './src/module/error/error.html',
        callback: function() {
            console.log('Error route loaded');
        }
    }
};