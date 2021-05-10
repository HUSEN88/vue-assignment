import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UsersList from '../views/UsersList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'UserList',
    component: UsersList
  },
  {
    path: '/users/:id/posts',
    name: 'UserPosts',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPosts.vue')
  },
  {
    path: '/users/:id/posts/:postId',
    name: 'UserPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPost.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
