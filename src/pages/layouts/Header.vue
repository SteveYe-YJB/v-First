<template>
  <div class="header-bar">
    <div>横向到账经费表</div>
    <div style="display: flex;align-items: center">
      <user-outlined />
      <div style="margin-left: 5px">{{userName}}</div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
let store = useStore()
let userName = computed(() => store.state.userName)
</script>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  color: #fff;
  font-size: 18px;
}
</style>
