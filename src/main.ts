import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "github-markdown-css"
// import CmUi from 'lib/index'
import CmUi from 'f-cm-ui'
import 'f-cm-ui/dist/lib/cm-ui.css'

createApp(App).use(router).use(CmUi).mount('#app')
