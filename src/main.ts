import { createApp } from 'vue'
import './style.css'
import { createPinia } from "pinia";
import App from './App.vue'

//创建pina
const pina = createPinia();
createApp(App).use(pina).mount('#app')
