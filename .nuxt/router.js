import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ad66a3c = () => interopDefault(import('../pages/collector.vue' /* webpackChunkName: "pages/collector" */))
const _2801f02b = () => interopDefault(import('../pages/publisher.vue' /* webpackChunkName: "pages/publisher" */))
const _1b68f4e6 = () => interopDefault(import('../pages/readPage.vue' /* webpackChunkName: "pages/readPage" */))
const _7c0300fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/collector",
    component: _6ad66a3c,
    name: "collector"
  }, {
    path: "/publisher",
    component: _2801f02b,
    name: "publisher"
  }, {
    path: "/readPage",
    component: _1b68f4e6,
    name: "readPage"
  }, {
    path: "/",
    component: _7c0300fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
