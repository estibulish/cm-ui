import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "github-markdown-css"
import CmUi from 'lib/index'

createApp(App).use(router).use(CmUi).mount('#app')
