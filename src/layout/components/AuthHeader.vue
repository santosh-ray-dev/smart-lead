<template>
  <div>
    <div class="header-container">
      <div class="header-layout">
        <!-- logo section start -->
        <div class="logo-svg">
          <logoSvg />
        </div>
        <!-- logo section end -->
        <div class="trail-profile-layout">
          <div class="trail-layout">
            <div class="star-svg">
              <star />
            </div>
            <div class="text">Trail expires in 12 days</div>
          </div>
          <div class="info-section">
            <info />
          </div>
          <div class="gift-section">
            <gift />
          </div>
          <!-- profile section start -->
          <div class="profile-container">
            <div class="profile-layout">
              <userProfile class="profile-icon" />
              <!-- popup section start -->
              <div class="popup-container popup-show">
                <div class="popup-layout">
                  <div class="user-info">
                    <div class="user-icon"><userProfile /></div>
                    <div class="user-email">rai0909966gmaui.com</div>
                  </div>
                  <div class="logout-button-layout">
                    <div class="logout-button" @click="logOutFn">Logout</div>
                  </div>
                </div>
              </div>
              <!-- popup section end -->
            </div>
          </div>
          <!-- profile section end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
import logoSvg from '../../components/svg/logo.vue'
import gift from '@/components/svg/gift.vue';
import info from '@/components/svg/info.vue';
import star from '@/components/svg/star.vue';
import userProfile from '@/components/svg/userProfile.vue';
import {useRouter} from 'vue-router'
import { useMyStore } from '@/store';
const store = useMyStore()
const router = useRouter()

const logOutFn = ()=>{
    store.logOut()
    router.push('/login')
}
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  background: #00056a;
  box-shadow: 0px 2px 4px rgba(141, 143, 169, 0.1);
  justify-content: center;
  .header-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    .trail-profile-layout {
      display: flex;
      gap: 20px;
      align-items: center;
      .trail-layout {
        cursor: pointer;
        display: inline-flex;
        padding: 7px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 46px;
        background: rgba(255, 255, 255, 0.2);

        .text {
          color: #fff;
          font-family: DM Sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .info-section {
        cursor: pointer;
      }
      .gift-section {
        cursor: pointer;
      }
      .profile-container {
        .profile-layout {
          .popup-show {
            display: none;
          }
          cursor: pointer;
          position: relative;
          &:hover {
            .popup-show {
              display: flex;
            }
          }
          .popup-container {
            position: absolute;
            right: 1px;
            .popup-layout {
              background: #fff;
              width: 200px;
              height: 120px;
              border-radius: 4px;
              box-shadow: 0px 2px 1px 0 #0000;
              display: flex;
              flex-direction: column;
              padding: 20px;
              justify-content: space-around;
              animation: expand 0.1s ease;

              @keyframes expand {
                from {
                  height: 0;
                }
                to {
                  height: 120px;
                }
              }
              .user-info {
                display: flex;
                flex-direction: column;
                .user-icon {
                  display: flex;
                  justify-content: center;
                }
                .user-email {
                  font-size: 12px;
                }
              }
              .logout-button-layout {
                height: 20px;
                background: #757ae9;
                border-radius: 5px;
                &:hover {
                  background: #00056a;
                }
                .logout-button {
                  font-size: 12px;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>