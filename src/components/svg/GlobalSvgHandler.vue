<!-- GlobalSvgHandler.vue -->

<template>
  <div v-if="svgContent" class="svg-icon" v-html="svgContent"></div>
</template>

<script setup>
import { defineProps, ref, onMounted,toRefs } from "vue";
const props = defineProps(['iconName']);

const {iconName} = toRefs(props)

const svgContent = ref(null);

console.log("iconName:", iconName.value);

onMounted(async () => {
  try {
    const response = await import(`@/assets/svg/${iconName.value}.svg`);
    svgContent.value = response.default;
  } catch (error) {
    console.error(`Failed to load SVG: ${iconName.value}.svg`);
  }
});
</script>

<style scoped>
.svg-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
