<template>
  <div>
    <div class="header-container">
      <div class="header-layout">
        <div class="logo-svg">
          <logoSvg />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
import logoSvg from '../../components/svg/logo.vue'
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  width: 100%;
  height: 80px;
  background: #00056a;
  box-shadow: 0px 2px 4px rgba(141, 143, 169, 0.1);
  .header-layout {
    display: flex;
    align-items: center;
    .logo-svg {
      padding: 24px 18px;
    }
  }
}
</style>
