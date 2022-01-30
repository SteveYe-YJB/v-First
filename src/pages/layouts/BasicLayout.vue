<template>
  <a-layout style="height: 100vh">
<!--    <a-layout-sider-->
<!--        breakpoint="lg"-->
<!--        collapsed-width="0"-->
<!--        @collapse="onCollapse"-->
<!--        @breakpoint="onBreakpoint"-->
<!--        class="layout-sider"-->
<!--    >-->
<!--      <div class="logo" />-->
<!--      <SiderMenu></SiderMenu>-->
<!--    </a-layout-sider>-->
    <a-layout>
      <div class="header-background"></div>
      <a-layout-header class="layout-header">
        <Header ></Header>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
<!--        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>-->
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>




</template>


<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import SiderMenu from './SiderMenu.vue'

const onCollapse = (collapsed, type) => {
  console.log(collapsed, type)
}

const onBreakpoint = broken => {
  console.log(broken)
}

</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.layout-sider {
  background-color: #fff;
}

.layout-header {
  background: rgba(255, 255, 255, 0);
  padding: 0;
  z-index: 2;

}
.header-background {
  position: fixed;
  height: 400px;
  width: 100%;
  top:0;
  z-index: 1;
  background-image: linear-gradient(84deg,#2dce89,#2dcecc)!important;
}
.layout-content{

  z-index:2
}

</style>
