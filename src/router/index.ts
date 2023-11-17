import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "@/views/ListView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    props: {
      title: "Trending Prodcuts",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
  },
  {
    path: "/product-detail",
    name: "products",
    props: {
      title: "Product Detail",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to:any, from:any, savedPosition:any) {
   // savedPosition is only available for popstate navigations.
   

   // scroll to top by default
   return {x: 0, y: 0}
  },
});

export default router;
