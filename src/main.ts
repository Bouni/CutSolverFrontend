import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(BootstrapIconsPlugin)

app.mount('#app')
