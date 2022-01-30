
<template>
  <a-layout class="layout">
<!--    <a-layout-header>-->
<!--    </a-layout-header>-->
    <a-layout-content class="layout-content">
      <router-view></router-view>
    </a-layout-content>
<!--    <a-layout-footer style="text-align: center">-->
<!--      <Footer></Footer>-->
<!--    </a-layout-footer>-->
  </a-layout>

</template>


<script setup>
import Footer from './Footer.vue'
import { ref } from 'vue'
const backgroundImage = ref('linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%)')
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  background-image: v-bind(backgroundImage)
}
.layout-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>