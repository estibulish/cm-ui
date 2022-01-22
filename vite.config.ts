import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";
const mdPlugin = require('vite-plugin-markdown')
import Markdown from 'vite-plugin-md'

// const fileRegex = /\.(md)$/

// https://vitejs.dev/config/
export default defineConfig({
  // vue({ include: [/\.vue$/, /\.md$/] })
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html", "vue"],
    }),
    vitePluginVue,
    // Markdown(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "lib": path.resolve(__dirname, "./packages"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    port: 3001
  }
})
