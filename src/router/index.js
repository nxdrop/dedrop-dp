import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const mode = process.env.NODE_ENV === 'production' ? 'history' : 'hash'
const router = new VueRouter({
  routes,
  mode,
})

export default router
