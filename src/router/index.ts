import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue'),
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
