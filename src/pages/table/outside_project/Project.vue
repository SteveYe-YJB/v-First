<template>
  <div class="project-content">
    <a-table style="width: 100%;"
             :dataSource="dataSource"
             :columns="tableColumns"
             :pagination="false"
             :scroll="{ x: 1500, y: 500 }"/>
  </div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { getTableDataApi } from "../../../api"
import { columns } from "./table_config"

let router = useRouter()
let route = useRoute()
let store = useStore()

let dataSource = ref([])
let tableColumns = [...columns]

async function getTableData() {
  let userName = store.state.userName
  let pass_word = ''
  if (userName === '傅蓉') {
    pass_word = '123456'
  }
  let data = {
    user_name: userName,
    pass_word: pass_word
  }
  let res = await getTableDataApi(data)
  console.log(res)

  let tableData = []
  res.filter(item => {
    if (item.projectLeader === userName) {
      tableData.push(item)
    } else if (userName === '傅蓉') {
      tableData.push(item)
    }
  })
  dataSource.value = tableData
}

onMounted(()=>{
  if (store.state.userName === '') {
    router.push('/user')
  }
  getTableData()
})
</script>

<style lang="scss" scoped>
  .project-content {
    display: flex;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border-radius: 4px;
    margin: 16px 24px;
    padding: 16px;
    background-color: #fff;
    min-height: 500px;
  }
</style>