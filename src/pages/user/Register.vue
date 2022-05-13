
<template>
  <div class="chat_list">
    <div ref="chartRef" class="chart"></div>
    <div ref="chartRef2" class="chart"></div>

  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {ref,onMounted,onUnmounted} from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

// 通过ref获得DOM
let chartRef = ref()
let chartRef2 = ref()
let myChart
let myChart2
onUnmounted(()=>{
  myChart.dispose()
  myChart2.dispose()
  myChart = null
  myChart2 = null
})

onMounted(()=>{
  myChart = echarts.init(chartRef.value)
  const option = {
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    title: {
      text: props.item.title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',

        label: {
          normal: {
            show: true,
            formatter: '{b}: {c} ({d}%)' //⾃定义显⽰格式(b:name, c:value, d:百分⽐)
          }
        },
        data: props.item.value,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option)

  myChart2 = echarts.init(chartRef2.value)
  const option2 = {
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter:'{b}: {c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    title: {
      text: props.item.title,
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: props.item.value.map((item)=>{return item.name})
    },
    yAxis: {
      type: 'value'
    },
    label: {
      show: true, //开启显⽰
      position: 'top', //在上⽅显⽰
      formatter: '{c}',
      textStyle: { //数值样式
        color: 'black',//字体颜⾊
        fontSize: 10//字体⼤⼩
      },
    },
    series: [
      {
        barWidth: 60,
        data: props.item.value.map((item)=>{return item.value}),
        type: 'bar'
      }
    ]
  };
  myChart2.setOption(option2)
})
</script>

<style>
.chat_list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chart {
  width: 800px;
  height: 600px;
}
</style>