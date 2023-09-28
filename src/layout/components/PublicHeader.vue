<template>
  <div>
    <div class="header-container">
      <div class="header-layout">
        <GlobalSvgHandler iconName="logo" />

      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.header-container {
  width: 100%;
  height: 80px;
  background: #00056a;
  box-shadow: 0px 2px 4px rgba(141, 143, 169, 0.1);
  .header-layout{
    display: flex;
    // flex-direction: column;
  }

}
</style>
