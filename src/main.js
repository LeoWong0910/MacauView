import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

//install Router
import router from './router'

app.use(router);

//install ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus);


app.mount('#app')
