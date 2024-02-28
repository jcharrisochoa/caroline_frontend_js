export const routesMenu = {
    tercero:{
        path: '/tercero',
        script: './src/module/tercero/tercero.js',
        template: './src/module/tercero/tercero.html',
        callback: function() {
            console.log('Tercero route loaded');
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