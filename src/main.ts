import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import router from './router/routes'
import "@/utils/extend";
import lazyLoad from "@/utils/lazyLoad";

const app = createApp(App)

app.use(createPinia());
app.use(router)
app.use(lazyLoad)

app.mount('#app')
