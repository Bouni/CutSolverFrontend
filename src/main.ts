import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import VuePapaParse from 'vue-papa-parse'
import Notifications from 'notiwind'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(BootstrapIconsPlugin).use(VuePapaParse).use(Notifications)

app.provide('$papa', app.config.globalProperties.$papa)

app.mount('#app')
