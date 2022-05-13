import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index'
import App from './App.vue'
import store from '../src/store/index'
import * as Icons from '@ant-design/icons-vue'
import * as echarts from 'echarts'

const app  = createApp(App)
app.use(Antd)
    .use(store)
    .use(router)
    .mount('#app')


const icons = Icons
for (const i in icons) {
    app.component(i,icons[i])
}