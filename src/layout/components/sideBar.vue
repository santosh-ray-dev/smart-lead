<template>
  <div class="side-bar-container">
    <div class="side-bar-layout">
      <div class="router-nav-layout">
        <!-- loop in routers to show the available nav link -->
        <div
          :class="{ active: routeData.meta.title == route.meta.title }"
          class="route-link-layout"
          v-for="(route, index) in allRoutes"
          :key="index"
          @click="GoToRoute(route)"
        >
          <div v-if="route.meta.iconName == 'allLeadSvg'" class="route-icon">
            <allLeadSvg :active="routeData.meta.title == route.meta.title" />
          </div>
          <div
            v-if="route.meta.iconName == 'emailCampaignsSvg'"
            class="route-icon"
          >
            <emailCampaignsSvg
              :active="routeData.meta.title == route.meta.title"
            />
          </div>
          <div
            v-if="route.meta.iconName == 'masterIndexSvg'"
            class="route-icon"
          >
            <masterIndexSvg
              :active="routeData.meta.title == route.meta.title"
            />
          </div>
          <div class="route-name">{{ route.meta.title }}</div>
        </div>
      </div>
      <div class="other-links-layout"></div>
    </div>
  </div>
</template>
<script lang="js" setup>
//get route from router index file
import {protectedRoute} from '../../router/index'
import { computed } from 'vue';
import allLeadSvg from '../../components/svg/allLead.vue'
import emailCampaignsSvg from '../../components/svg/emailCampaigns.vue'
import masterIndexSvg from '../../components/svg/masterIndex.vue'
import {useRoute,useRouter} from 'vue-router'
const router = useRouter()
const routeData = useRoute()

// const activeName = ref(null)


// find all meta from every children to get title and icon
const allRoutes = computed(()=>{
    var result = []
    if(protectedRoute.length>0){
         protectedRoute.forEach((item)=>{
            result = [...result,...item.children.map((child)=>child)]
        })
        return result
    }else{
        return []
    }
})

    //push route on nav click
    const GoToRoute = (route)=>{
        router.push(route.path)
    }
</script>
<style lang="scss" scoped>
.side-bar-container {
  height: 100%;
  .side-bar-layout {
    width: 230px;
    height: 100vh;

    background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
    .router-nav-layout {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      .route-link-layout {
        display: flex;
        padding: 20px;
        gap: 17px;
        width: 230px;
        height: 40px;
        cursor: pointer;

        border-left: 3px solid #fff;
        &.active {
          background: rgba(117, 122, 233, 0.1);
          border-left: 3px solid #757ae9;
        }
        &:hover {
          background: rgba(117, 122, 233, 0.1);
        }
        .route-icon {
          display: flex;
          align-items: center;
        }
        .route-name {
          display: flex;
          align-items: center;
          color: #282b42;
          font-family: DM Sans;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
}
</style>
