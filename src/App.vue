<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script lang="js" setup>
import vex from 'vex-js';
import 'vex-js/dist/css/vex.css';
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

onMounted(()=>{
//   vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-flat-attack'; // Choose a theme

// Initialize Vex.js
// vex.defaultOptions.useFontAwesome = true; // Use FontAwesome icons (optional)
// vex.dialog.defaultOptions.showCloseButton = true; 
  // vex.open('hello')
  console.log('vex',vex)
//   vex.dialog.confirm({
//     message: 'Are you absolutely sure you want to destroy the alien planet?',
//     callback: function (value) {
//         if (value) {
//             console.log('Successfully destroyed the planet.')
//         } else {
//             console.log('Chicken.')
//         }
//     }
// })
vex.dialog.confirm({
    message: 'Are you absolutely sure you want to destroy the alien planet?',
    callback: function (value) {
        if (value) {
            console.log('Successfully destroyed the planet.')
        } else {
            console.log('Chicken.')
        }
    }
})
})
 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
