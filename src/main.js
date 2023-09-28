import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import vex from 'vex-js'
import vexDialog from 'vex-dialog'
import { createPinia } from 'pinia'
import './store'
import GlobalSvgHandler from './components/svg/GlobalSvgHandler.vue';

const Vue = createApp(App);
Vue.component('GlobalSvgHandler', GlobalSvgHandler);
vex.registerPlugin(vexDialog);
vex.defaultOptions.className = 'vex-theme-flat-attack'; 
Vue.use(vex)
Vue.use(router)
Vue.use(createPinia());

Vue.mount("#app");

