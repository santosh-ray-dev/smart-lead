<template>
    <div class="side-bar-container">
        <div class="side-bar-layout">
            <div class="router-nav-layout">
                <div class="route-link-layout">
                    <div class="route-icon"></div>
                    <div class="route-name"></div>
                </div>

            </div>
            <div class="other-links-layout">

            </div>

        </div>
    </div>
</template>
<script lang="js" setup>
import {} from '../../router/index'

</script>
<style lang="scss" scoped>
.side-bar-container{
    height: 100%;
    .side-bar-layout{
        width: 230px;
        // height: 850px;
    height: 100vh;

        
        background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;  
        .router-nav-layout{

        } 
        .other-links-layout{

        } 
    }

}
    
</style>