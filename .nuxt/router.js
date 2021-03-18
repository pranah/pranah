import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _958ad092 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2c5267b7 = () => interopDefault(import('../pages/collector.vue' /* webpackChunkName: "pages/collector" */))
const _2d0424b4 = () => interopDefault(import('../pages/publisher.vue' /* webpackChunkName: "pages/publisher" */))
const _a3ec47ea = () => interopDefault(import('../pages/readPage.vue' /* webpackChunkName: "pages/readPage" */))
const _561b1b08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _958ad092,
    name: "about"
  }, {
    path: "/collector",
    component: _2c5267b7,
    name: "collector"
  }, {
    path: "/publisher",
    component: _2d0424b4,
    name: "publisher"
  }, {
    path: "/readPage",
    component: _a3ec47ea,
    name: "readPage"
  }, {
    path: "/",
    component: _561b1b08,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
