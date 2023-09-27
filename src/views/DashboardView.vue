<template>
     <h1>this is Dashboard </h1>
</template>
<script lang="js" setup>
import { onMounted } from 'vue';
import { useMyStore } from '../store';
const myStore = useMyStore();

onMounted(()=>{
    console.log(myStore.count)
})


</script>
<style>
    
</style>../store/store