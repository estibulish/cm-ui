import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "@/markdown/get-started.md";
import { html as Install } from "@/markdown/install.md";
import { html as Intro } from "@/markdown/intro.md";

const md = (string: string) => h(Markdown, { content: string, key: string })

// export default {
//   文档: [
//     { path: "/doc/intro", component: () => import(/* webpackChunkName: "doc" */'@/markdown/intro.md'), name: "介绍" },
//     { path: "/doc/install", component: () => import(/* webpackChunkName: "doc" */'@/markdown/install.md'), name: "安装" },
//     { path: "/doc/get-started", component: () => import(/* webpackChunkName: "doc" */'@/markdown/get-started.md'), name: "快速使用" },
//   ]
// };

export default {
  文档: [
    { path: "/doc/intro", component: md(Intro), name: "介绍" },
    { path: "/doc/install", component: md(Install), name: "安装" },
    { path: "/doc/get-started", component: md(GetStarted), name: "快速使用" },
  ],
  通用: [
    { path: "/doc/button", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/button/index.vue'), name: "button 按钮" },
    { path: "/doc/avatar", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/avatar/index.vue'), name: "avatar 头像" },
    { path: "/doc/icon", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/icon/index.vue'), name: "icon 图标" },
    { path: "/doc/link", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/link/index.vue'), name: "link 链接" },
  ],
  数据录入: [
    { path: "/doc/switch", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/switch/index.vue'), name: "switch 开关" },
  ],
  反馈: [
    { path: "/doc/dialog", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/dialog/index.vue'), name: "dialog 对话框" },
  ],
  数据展示: [
    { path: "/doc/tabs", component: () => import(/* webpackChunkName: "doc" */'@/views/docs/tabs/index.vue'), name: "tabs 标签页" },
  ]
};
