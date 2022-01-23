import { App } from "vue";
import CmButton from "./button/index.vue";
import CmIcon from "./icon/index.vue";
import CmAvatar from "./avatar/index.vue";
import CmLink from "./link/index.vue";
import CmSwitch from "./switch/index.vue";
import CmDialog from "./dialog/index.vue";
import CmTabs from "./tabs/index.vue";
import CmTab from "./tab/index.vue";
import Modal from "./dialog/modal";
import 'lib/font/font.js'

export { 
  CmButton,
  CmIcon,
  CmAvatar,
  CmLink,
  CmSwitch,
  CmDialog,
  CmTabs,
  CmTab,
  Modal 
}

const components = [
  CmButton,
  CmIcon,
  CmAvatar,
  CmLink,
  CmSwitch,
  CmDialog,
  CmTabs,
  CmTab,
  Modal
]


// 全局注册主键
export function registerCmUi(app: App): void {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default registerCmUi;