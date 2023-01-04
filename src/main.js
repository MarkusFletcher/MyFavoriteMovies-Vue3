import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import './styles/reset.css'
import './styles/style.scss'


createApp(App).use(createPinia()).mount('#app')
