import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/styles/styles.scss'
import './assets/fonts/Mulish/fonts.css'


createApp(App).use(router).mount('#app')
