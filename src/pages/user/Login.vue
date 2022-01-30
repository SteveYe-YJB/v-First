

<template>
  <div class="login">
    <div style="color:#8898aa">Sign in with credentials</div>
    <div style="padding: 0 64px;margin-top: 20px">
      <a-input class="login-input"  size="large" v-model:value="userAccount" placeholder="请输入账号"></a-input>
      <a-input-password class="login-input"  size="large" v-model:value="passWord" placeholder="请输入密码"></a-input-password>
    </div>
    <div>
      <a-button @click="userLogin" :class="buttonClass" @mouseenter="mouseInButton" @mouseleave="mouseOutButton" type="primary" size="large">
        登录
      </a-button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { userLoginRequset } from '../../api/index'


let userAccount = ref('')
let passWord = ref('')
let router = useRouter()
let route = useRoute()
let store = useStore()

// 登录按钮样式变化控制
let buttonClass = ref('sign-button')
const mouseInButton = () => {
  buttonClass.value = 'sign-button in-button'
}
const mouseOutButton = () => {
  buttonClass.value = 'sign-button'
}

// 点击用户登录
const userLogin = async () => {
  let data = {
    account_no: userAccount.value,
    pass_word: passWord.value
  }
  let res = await userLoginRequset(data)
  let userName = res.userName
  store.commit('setUserName',userName)
  console.log(store.state.userName)
  let token = res.token
  window.localStorage.setItem('token',token)
  // console.log(token)
  router.push('/')
}

</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 440px;
    padding: 40px 0;
    background-color: #f5f5f5;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border-radius: 4px;
  }
  .login-input {
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border: none;
    border-radius: 4px;
  }
  .sign-button {
    background-color: #5E72E4;
    border: 1px solid #5E72E4;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border-radius: 4px;
  }
  .in-button {
    box-shadow: 0px 5px 4px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  }
</style>
