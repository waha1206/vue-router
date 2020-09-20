import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, // es6 簡寫，如果同名的話 store:store 可以減寫成 store
  render: h => h(App)
}).$mount("#app");
