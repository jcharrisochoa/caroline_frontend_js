import {defineConfig} from 'vite'


export default defineConfig(({command,mode})=>{
    const port = 3000;
    console.log(mode,command);
    return {
        base: '/',
        build: {
            assetsDir: 'assets',
        },
        server:{
            port
        }
    }

})