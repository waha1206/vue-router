<template>
  <div class="">
    <h1>這是用戶頁面：{{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  // 再創建組件之前 所以 不能獲取組件的實例 this
  beforeRouteEnter(to, from, next) {
    console.log("組件內的守衛 beforeRouterEnter");
    next();
  },
  // 路由參數更新的時候執行
  beforeRouteUpdate(to, from, next) {
    console.log("組件內的守衛 beforeRouterUpdate");
    console.log(this);
    next();
  },
  // 路由銷毀的時候執行
  beforeRouteLeave(to, from, next) {
    console.log("組件內的守衛 beforeRouteLeave");
    next();
  },
  beforeCreate() {
    console.log(" ==> beforeCreate");
  },
  beforeDestroy() {
    console.log(" ==> beforeDestroy");
  },
  beforeUpdate() {
    console.log(" ==> beforeUpdate");
  },
  updated() {
    console.log(" ==> updated");
  }
};
</script>
