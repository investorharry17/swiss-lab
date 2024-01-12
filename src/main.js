import { createApp } from 'vue'
import router from "./router.js"
import Antd from 'ant-design-vue';

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Antd)
app.use(router)

app.mount('#app')
