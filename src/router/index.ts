import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";
import docRoutes from "./docs";

let newDocRoutes: RouteRecordRaw[] = []
for (const key in docRoutes) {
  newDocRoutes = [...newDocRoutes,...docRoutes[key]]
}

const routes: Array<RouteRecordRaw> = [
  { 
    path: "/", 
    redirect: "/home",
    component: () => import(/* webpackChunkName: "home" */'@/views/home/Index.vue'), 
    children:[
      { 
        path: "/home", 
        name: 'home', 
        component: () => import(/* webpackChunkName: "home" */'@/views/home/Home.vue')
      },
      {
        path: "/doc",
        redirect: "/doc/intro",
        component: () => import(/* webpackChunkName: "doc" */'@/views/docs/Index.vue'),
        children: [
          ...newDocRoutes
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router