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
      <!-- other links section start -->
      <div class="other-links-layout">
        <div class="separator-layout">
            <div class="separator"></div>
        </div>
        <!-- link 1 -->
          <div class="link-layout">
            <div class="link-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.20195 12.6366C4.20195 13.7929 3.25733 14.7376 2.10098 14.7376C0.944626 14.7376 0 13.7929 0 12.6366C0 11.4802 0.944626 10.5356 2.10098 10.5356H4.20195V12.6366Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M5.26062 12.6366C5.26062 11.4802 6.20525 10.5356 7.3616 10.5356C8.51795 10.5356 9.46257 11.4802 9.46257 12.6366V17.8972C9.46257 19.0535 8.51795 19.9982 7.3616 19.9982C6.20525 19.9982 5.26062 19.0535 5.26062 17.8972V12.6366Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M7.3616 4.20195C6.20525 4.20195 5.26062 3.25733 5.26062 2.10098C5.26062 0.944626 6.20525 0 7.3616 0C8.51795 0 9.46257 0.944626 9.46257 2.10098V4.20195H7.3616Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M7.36156 5.26071C8.51792 5.26071 9.46254 6.20534 9.46254 7.36169C9.46254 8.51804 8.51792 9.46267 7.36156 9.46267H2.10098C0.944626 9.46267 0 8.51804 0 7.36169C0 6.20534 0.944626 5.26071 2.10098 5.26071H7.36156Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M15.7982 7.36169C15.7982 6.20534 16.7428 5.26071 17.8991 5.26071C19.0555 5.26071 20.0001 6.20534 20.0001 7.36169C20.0001 8.51804 19.0555 9.46267 17.8991 9.46267H15.7982V7.36169Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M14.7394 7.36156C14.7394 8.51792 13.7948 9.46254 12.6385 9.46254C11.4821 9.46254 10.5375 8.51792 10.5375 7.36156V2.10098C10.5375 0.944626 11.4821 0 12.6385 0C13.7948 0 14.7394 0.944626 14.7394 2.10098V7.36156Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M12.6385 15.7963C13.7949 15.7963 14.7395 16.741 14.7395 17.8973C14.7395 19.0537 13.7949 19.9983 12.6385 19.9983C11.4822 19.9983 10.5375 19.0537 10.5375 17.8973V15.7963H12.6385Z"
                  fill="#A9ABC1"
                />
                <path
                  d="M12.6385 14.7376C11.4822 14.7376 10.5375 13.7929 10.5375 12.6366C10.5375 11.4802 11.4822 10.5356 12.6385 10.5356H17.8991C19.0555 10.5356 20.0001 11.4802 20.0001 12.6366C20.0001 13.7929 19.0555 14.7376 17.8991 14.7376H12.6385Z"
                  fill="#A9ABC1"
                />
              </svg>
            </div>
            <div class="link-text">Join Slack Community</div>
          </div>
           <!-- link 1 -->

            <!-- link 2 -->
          <div class="link-layout">
          <div class="link-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#E1E3EF" />
              <path
                d="M13.828 9.14519C14.4695 9.53458 14.4695 10.4654 13.8281 10.8548L8.51906 14.0779C7.85263 14.4824 7.00011 14.0027 7.00011 13.2231L7.00011 6.77695C7.00011 5.99733 7.85263 5.51756 8.51906 5.92214L13.828 9.14519Z"
                fill="#A9ABC1"
              />
            </svg>
          </div>
          <div class="link-text">Smartlead Tutorials</div>
        </div>
         <!-- link 2 -->
      </div>
      <!-- other links section end -->
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
    .router-nav-layout {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
      gap: 10px;
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
    .other-links-layout {
        display: flex;
    flex-direction: column;
    padding: 20px;
    gap:32px;
    .separator-layout{
        display: flex;
        justify-content: center;
        .separator {
        width: 50px;
        height: 2px;
        background:#E1E3EF;
        border-radius: 10px 10px 0px 0px;
      }

    }
     
      .link-layout {
        display: flex;
        gap:20px;
        cursor: pointer;

        .link-logo {
        }
        .link-text {
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
