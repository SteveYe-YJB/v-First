<template>
  <template v-for="item in data">
    <Chart :item="item"></Chart>
  </template>

</template>

<script setup>
import Chart from './Register.vue'
import {ref} from 'vue'
const data = ref([
  {
    title:'您的性别',
    value: [
      {
        name: '男',
        value: 109
      },
      {
        name: '女',
        value: 157
      },
    ]
  },
  {
    title:'您的年级',
    value: [
      {
        name: '大一',
        value: 99
      },
      {
        name: '大二',
        value: 56
      },
      {
        name: '大三',
        value: 51
      },
      {
        name: '大四',
        value: 59
      },
      {
        name: '其他【硕士研究生】',
        value: 1
      },
    ]
  },
  {
    title:'您的专业方向',
    value: [
      {
        name: '理工类',
        value: 174
      },
      {
        name: '文史哲类',
        value: 79
      },
      {
        name: '综合类',
        value: 13
      },
    ]
  },
  {
    title:'您来自',
    value: [
      {
        name: '城市',
        value: 118
      },
      {
        name: '乡镇',
        value: 92
      },
      {
        name: '县城',
        value: 56
      },
    ]
  },
  {
    title:'您是否有暂缓返校或隔离在家的经历？',
    value: [
      {
        name: '是',
        value: 124
      },
      {
        name: '否',
        value: 142
      },
    ]
  },
  {
    title:'您每个月的生活费？',
    value: [
      {
        name: '1000-1500',
        value: 155
      },
      {
        name: '1500-2000',
        value: 54
      },
      {
        name: '1000以下',
        value: 29
      },
      {
        name: '2000以下',
        value: 28
      },
    ]
  },
  {
    title:'疫情后，您每月网购的消费金额的变化情况',
    value: [
      {
        name: '没有变化',
        value: 108
      },
      {
        name: '增加',
        value: 106
      },
      {
        name: '减少',
        value: 52
      },
    ]
  },
  {
    title:'疫情后，您每周大概的网购频率',
    value: [
      {
        name: '较少',
        value: 85
      },
      {
        name: '偶尔',
        value: 61
      },
      {
        name: '经常',
        value: 120
      },
    ]
  },
  {
    title:'您是否有“只看不买”这一网购倾向或经历',
    value: [
      {
        name: '是',
        value: 205
      },
      {
        name: '否',
        value: 61
      },
    ]
  },
  {
    title:'您认为疫情下您的网购心理变化程度',
    value: [
      {
        name: '没有变化或变化很小',
        value: 188
      },
      {
        name: '变化很大',
        value: 78
      },
    ]
  },
  {
    title:'疫情下网购心理变化很小或没有变化的原因',
    value: [
      {
        name: '一直都不怎么网购',
        value: 82
      },
      {
        name: '对政府的管控较有信心',
        value: 63
      },
      {
        name: '对学校的管控较有信心',
        value: 23
      },
      {
        name: '其他',
        value: 17
      },
    ]
  },
  {
    title:'网购心理变化最主要体现在',
    value: [
      {
        name: '网购频率的变化',
        value: 40
      },
      {
        name: '网购商家的选择',
        value: 17
      },
      {
        name: '网购物品种类的转变',
        value: 11
      },
      {
        name: '网购下单时间',
        value: 17
      },
      {
        name: '其他',
        value: 3
      },
    ]
  },
  {
    title:'网购频率的变化',
    value: [
      {
        name: '总量增加',
        value: 40
      },
      {
        name: '总量减少',
        value: 25
      },

    ]
  },
  {
    title:'疫情前后，您在校期间取快递的时间是否有变化',
    value: [
      {
        name: '变化大，取快递时间变长',
        value: 182
      },
      {
        name: '变化不大',
        value: 61
      },
      {
        name: '变化大, 取快递时间变短',
        value: 61
      },

    ]
  },
  {
    title:'您觉得学校快递驿站的管控是利大于弊还是弊大于利',
    value: [
      {
        name: '弊大于利',
        value: 110
      },
      {
        name: '利大于弊',
        value: 86
      },
      {
        name: '无感',
        value: 70
      },

    ]
  },





])

</script>

<style scoped>

</style>