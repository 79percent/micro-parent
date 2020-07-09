import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          component: '@/pages/mine'
        },
        // app1 容器路由
        {
          path: '/app1',
          component: '@/pages/app1'
        },
        // app2 容器路由
        {
          path: '/app2',
          component: '@/pages/app2'
        }
      ]
    },
  ],
  qiankun: {
    master: {
      apps: [
        // 注册子应用信息
        {
          name: 'app1', // 唯一 id
          entry: 'https://79percent.github.io/micro-app1/#/', // html entry
          base: '/app1', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          // history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
          mountElementId: 'app1' // 子应用挂载到主应用的哪个 id 节点上（注意不要跟子应用的 mountElementId 一致）
        },
        {
          name: 'app2', // 唯一 id
          entry: 'https://79percent.github.io/micro-app2/', // html entry
          base: '/app2', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          mountElementId: 'app2' // 子应用挂载到主应用的哪个 id 节点上（注意不要跟子应用的 mountElementId 一致）
        }
      ]
    }
  },
  antd: {},
  history: { type: 'hash' },
  publicPath: './'
});