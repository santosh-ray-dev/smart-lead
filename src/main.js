import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import vex from 'vex-js'

const Vue = createApp(App);
vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-flat-attack'; 
Vue.use(vex)

Vue.mount("#app");

