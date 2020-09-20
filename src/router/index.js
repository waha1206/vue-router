import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddUser from "../views/User/AddUser.vue";
import EditUser from "../views/User/EditUser.vue";
import Left from "../views/Home/Left.vue";
import Right from "../views/Home/Right.vue";
import Foot from "../views/Home/Foot.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/kk",
    children: [
      {
        path: "kk",
        components: {
          default: Left,
          right: Right,
          foot: Foot
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/user/:id",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
    redirect: to => {
      console.log("跳轉惹+", to.params.id);
      return `/user/${to.params.id}/add`;
    },

    beforeEnter: (to, from, next) => {
      console.log("路由守衛，跳轉前可以判斷user是否可以進入");
      next();
    },
    children: [
      {
        path: "add", // user/id/add
        component: AddUser
      },
      {
        path: "/edit",
        component: EditUser
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/product/:id",
    name: "Product",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log("全局的路由守衛, beforeEach");
  // console.log("to", to);
  // console.log("from", from);
  // if (to.path != "/home")
  next();
});

router.beforeResolve((to, from, next) => {// eslint-disable-line
  console.log("全局守衛, beforeResolve");
  next();
});

router.afterEach((to, from) => {// eslint-disable-line
  console.log("全局守衛, afterEach");
});

export default router;
