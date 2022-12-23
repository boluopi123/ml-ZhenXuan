import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入path
import path from 'path'
//配置vant插件
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  publicPath: "/gh-pages",// github仓库名
  assetsDir: "gh-pages",// github仓库名 ,否则访问不到静态资源
  outputDir: "dist",
  base: "./",
  //插件
  plugins: [vue(),
  Components({
    resolvers: [VantResolver()],
  }),
  ],
  //代理解决跨域
  server: {
    proxy: {
      "/api": {
        target: "http://backend-api-01.newbee.ltd",
        changeOrigin: true
      }
    }
  },
  //配置@ 访问src目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
