<template>
   <RouterView />
</template>

<script lang="js" setup>
import { RouterView } from "vue-router";
// import vex from 'vex-js';
import { onMounted } from 'vue';


onMounted(()=>{
//   vex.registerPlugin(require('vex-dialog'));
// vex.defaultOptions.className = 'vex-theme-flat-attack'; // Choose a theme


//   console.log('vex',vex)
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
// vex.dialog.confirm({
//     message: 'Are you absolutely sure you want to destroy the alien planet?',
//     callback: function (value) {
//         if (value) {
//             console.log('Successfully destroyed the planet.')
//         } else {
//             console.log('Chicken.')
//         }
//     }
// })
})
 

</script>

<style>

</style>
