<template>
    <div>
        <div class="auth-layout-container">
            <div class="auth-layout">
                <div class="header-section">
                 <AuthHeader/>
                </div>
                <div class="side-bar-and-router-layout">
                    <div class="side-bar-section">
                        <sideBar/>
                    </div>
                    <div class="router-view-section" >
                    <RouterView/>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script lang="js" setup>
import AuthHeader from './components/AuthHeader.vue'
import sideBar from './components/sideBar.vue';
import { RouterView } from "vue-router";


</script>
<style lang="scss" scoped>
.auth-layout-container{
    display: flex;
    flex-direction: column;
    .auth-layout{
        display: flex;
        flex-direction: column;
        .header-section{

        }
        .side-bar-and-router-layout{
            display: flex;
            .side-bar-section{

            }
            .router-view-section{

            }

        }

    }

}
   
</style>