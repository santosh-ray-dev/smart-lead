<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<rect width="20" height="20" rx="3" :fill="active?'#757AE9':'#E1E3EF'"/>
<path d="M14.8467 7.74219H5.5C5.22386 7.74219 5 7.96604 5 8.24219V9.54032C5 9.68545 5.06306 9.82343 5.17281 9.9184L8.52496 12.8193C8.63471 12.9143 8.69777 13.0522 8.69777 13.1974V15.8403C8.69777 16.2161 9.09686 16.4576 9.42978 16.2832L11.4164 15.2426C11.5812 15.1563 11.6844 14.9856 11.6844 14.7996V13.1959C11.6844 13.0516 11.7468 12.9144 11.8554 12.8194L15.1756 9.91827C15.2843 9.82333 15.3467 9.68606 15.3467 9.54176V8.24219C15.3467 7.96605 15.1228 7.74219 14.8467 7.74219Z" :fill="active?'white':'#A9ABC1'"/>
<circle cx="6.99105" cy="6.03231" r="1.13778" :fill="active?'white':'#A9ABC1'"/>
<ellipse cx="12.3957" cy="6.13897" rx="1.28" ry="1.24444" :fill="active?'white':'#A9ABC1'"/>
<circle cx="9.62217" cy="4.29203" r="0.959999" :fill="active?'white':'#A9ABC1'"/>
</svg>
</template>
<script lang="js" setup>
import {defineProps} from 'vue'
defineProps({
  active: {
    type: String,
    default(){
        return false
    }
    
  },
});
</script>
<style type="text/css" lang="scss" scoped>
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #50b849;
}
</style>