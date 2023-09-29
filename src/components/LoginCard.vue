<template>
  <div class="login-container">
    <div class="login-layout">
      <!-- login card start -->
      <div class="login-card">
        <div class="card-header">
          <div class="header-title">Welcome to Smartlead.ai</div>
          <div class="header-title-2">Log in to your account</div>
        </div>
        <!-- form section start  -->
        <div class="card-form-body">
          <!-- email input start -->
          <div class="input-layout">
            <div class="label-layout">
              <div class="label-text">Email</div>
            </div>
            <input :class="{'error-input':formError.email!=null}" class="input" v-model="form.email" @change="changeEmail" />
          </div>
          <!-- email input start -->

          <!-- email input start -->
          <div class="input-layout">
            <div class="label-layout">
              <div class="label-text">Password</div>
              <div class="forgot-pass-text">Forgot Password?</div>
            </div>
            <div class="input-with-show-button" :class="{'error-input':formError.password!=null}">
              <input
                :type="otherVariables.passwordInputType"
                v-model="form.password"
                @keyup.enter="login"
                @change="changePassword"
              />
              <div
                v-if="otherVariables.passwordInputType == 'password'"
                class="show-text-button"
                @click="passwordShowHideFn('show')"
              >
                Show
              </div>
              <div
                v-else
                class="show-text-button"
                @click="passwordShowHideFn('hide')"
              >
                Hide
              </div>
            </div>
          </div>
          <!-- email input start -->
        </div>
        <!-- form section end -->

        <div class="card-footer">
          <!-- sign-in button -->
          <div class="button-layout" @click="login">
            <div class="button">Sign in</div>
          </div>
          <!-- sign-in button -->
        </div>
      </div>
      <!-- login card end -->
    </div>
  </div>
</template>
<script lang="js" setup>
import { ref } from 'vue';
import { useMyStore } from '@/store';
import {useRouter} from 'vue-router';

const store = useMyStore();
const router =  useRouter()

const form = ref({
    email:'',
    password:''
})

const formError = ref({
  email:null,
  password:null
})

const changeEmail = (event)=>{
  if(event !== ''){
    formError.value.email = null
  }
}

const changePassword = (event)=>{
  if(event !== ''){
    formError.value.password = null
  }
}


//all valuables here
const otherVariables = ref({
  loading:false,
  passwordInputType:'password'

})

//for login
const login = ()=>{
  //prevent for the repeated call check loading
  if(!otherVariables.value.loading){
      otherVariables.value.loading = true;
    //check form validation
    if(form.value.email&&form.value.password){
      store.login(form.value).then((res)=>{
        console.info(res);
        otherVariables.value.loading = false
        router.push('/')

      }).catch((err)=>{
        otherVariables.value.loading = false
        console.error(err);
      })

    }else{
      otherVariables.value.loading = false
      // push err
      if(form.value.email == "" || form.value.email==null ) formError.value.email = 'Please Enter Email'
      if(form.value.password == "" || form.value.password == null) formError.value.password = 'Please Enter password'
  }

  }else{
    return
  }


}

//change password input type to show and hide
const passwordShowHideFn = (type) =>{
  if(type=='show'){
    otherVariables.value.passwordInputType = 'text'
  }else{
    otherVariables.value.passwordInputType = 'password'
  }
}
</script>
<style lang="scss" scoped>
.error-input{
  border: 1px solid red !important;
}
.login-container {
  .login-layout {
    .login-card {
      width: 545px;
      height: 424px;
      border-radius: 3px;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.25);
      display: flex;
      flex-direction: column;
      padding: 67px 60px;
      gap: 24.24px;
      .card-header {
        display: flex;
        flex-direction: column;
        gap: 8.8px;
        .header-title {
          color: #000115;
          text-align: center;
          font-family: DM Sans;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .header-title-2 {
          color: #000115;
          text-align: center;
          font-family: "DM Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .card-form-body {
        display: flex;
        flex-direction: column;
        gap: 16.6px;
        .input-layout {
          display: flex;
          flex-direction: column;
          .label-layout {
            display: flex;
            justify-content: space-between;
            .label-text {
              color: #7a7d9c;
              font-family: "DM Sans";
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px;
            }
            .forgot-pass-text {
              color: #757ae9;
              font-family: "DM Sans";
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .input {
            display: flex;
            flex-direction: row;
            height: 40.401px;
            border-radius: 3px;
            border: 1px solid #c6c7db;
            background: #fff;
            padding: 10px;
          }
          .input-with-show-button {
            display: flex;
            flex-direction: row;
            height: 40.401px;
            border-radius: 3px;
            border: 1px solid #c6c7db;
            background: #fff;

            input {
              width: 100%;
              padding: 10px;
            }
            .show-text-button {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              cursor: pointer;
              padding: 12px;
              color: #686b8a;
              font-family: "DM Sans";
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }
        }
      }
      .card-footer {
        .button-layout {
          width: 425px;
          height: 40.401px;
          border-radius: 3px;
          background: #edeef8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: #757ae9;
            .button {
              color: #fff;
            }
          }
          .button {
            color: #a9abc1;
            text-align: center;
            font-family: DM Sans;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
          }
        }
      }
    }
  }
}
</style>